# express-ts-firebase-sample

express \* typescript を用いた firebase sample

# setup

```
npm i
```

# Run

```
ts-node index.ts
```

## firebase storage

HTML から画像ファイルをアップロードする機能
デフォルトでは firebase storage の公開ルールが厳しくなっているため、ルールを修正する必要がある。

例：

```
service firebase.storage {
 match /b/{bucket}/o {
   match /{allPaths=**} {
     allow read, write: if true;
   }
 }
}
```

※上記はすべてのアクセスを受け入れる設定で実際のプロダクトレベルでは好ましくない
詳しくはセキュリティルールの例を参照。

https://firebase.google.com/docs/rules/basics?authuser=0&hl=ja#cloud-storage_1
