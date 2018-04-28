import {AsyncStorage} from 'react-native';
import RNStorage from 'react-native-storage'
import Constants from '../common/Constants';

const storage = new RNStorage({
    storageBackend: AsyncStorage,
    // 最大容量，默认值1000条数据循环存储
    size: 1000,
    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    defaultExpires: 1000 * 3600 * 24,
    // 读写时在内存中缓存数据。默认启用。
    enableCache: true,
    // 如果storage中没有相应数据，或数据已过期，
    // 则会调用相应的sync同步方法，无缝返回最新数据。
    sync: {
        // 同步方法的具体说明会在后文提到
    }
});

const Storage = {
    keys: [],
    save(key, param, expires){
        if (this.keys.indexOf(key) > -1) {
            this.keys.push(key);
        }
        storage.save({
            key: key,
            data: param,
            expires: expires || null
        });
    },
    remove(key){
        storage.remove({key: key});
    },
    load(key){
        return new Promise(function (resolve, reject) {
            storage.load({
                key: key
            }).then(data=> {
                resolve(data)
            }).catch((e)=> {
                resolve(null);
            })
        })
    },
    removeAll(){
        this.load(Constants.storageKeyUserToken)
            .then(token=> {
                let version = Constants.version;
                AsyncStorage.clear();
                if (token != null && token != '') {
                    this.save(Constants.storageKeyHasShownPEFAlert + token, version);
                }
                this.save(Constants.storageKeyHasShownPEFAlert, version);
                this.save(Constants.storageKeyHasShownGuide, version);
            });
    }
};

export default Storage

