# ★ VRCにアバターをアップロードする方法 ★

<br>

<div class="custom-index">
  <div class="index-header">
    <span class="index-dot"></span>
    <span class="index-title">CONTENTS</span>
    <span class="index-line"></span>
  </div>
  <nav>
    <ul>
      <li v-for="h in headers" :key="h.title">
        <a :href="'#' + h.slug" class="index-link">
          <span class="index-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </span>
          <span class="link-text">{{ h.title }}</span>
        </a>
      </li>
    </ul>
  </nav>
</div>

<script setup>
import { onMounted, ref } from 'vue'

const headers = ref([])

onMounted(() => {
  const h2Elements = Array.from(document.querySelectorAll('.vp-doc h2'))
  
  headers.value = h2Elements.map(h => {
    return {
      title: h.innerText.replace('#', '').trim(),
      slug: h.id
    }
  })
})
</script>

<style scoped>
.custom-index {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 3rem;
  max-width: 600px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.index-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.8rem;
}

.index-dot {
  width: 8px;
  height: 8px;
  background-color: var(--vp-c-brand-1);
  border-radius: 2px;
  transform: rotate(45deg);
}

.index-title {
  font-weight: 900;
  font-size: 0.9rem;
  color: var(--vp-c-brand-1);
  letter-spacing: 0.2em;
  font-family: var(--vp-font-family-base);
}

.index-line {
  flex-grow: 1;
  height: 1px;
  background: linear-gradient(to right, var(--vp-c-brand-1), transparent);
  opacity: 0.3;
}

.custom-index ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.custom-index li {
  margin: 1.2rem 0;
}

.index-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.25s ease;
}

.link-text {
  color: #2c3e50 !important;
  font-weight: 500;
  font-size: 1.05rem;
  line-height: 1.6;
}

.index-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  background-color: var(--vp-c-brand-1);
  border-radius: 50%;
  margin-right: 14px;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.index-icon svg {
  width: 12px;
  height: 12px;
  color: white;
}

.index-link:hover .link-text {
  color: var(--vp-c-brand-1) !important;
}

.index-link:hover {
  transform: translateX(10px);
}

.index-link:hover .index-icon {
  transform: scale(1.1);
  box-shadow: 0 0 12px rgba(46, 125, 50, 0.4);
}
</style>

以下の手順でアバターを VRChat へアップロードしてください。

不明点などの質問やクレームは **りっきー** までご相談ください。いつでもサポートします！！

::: tip おすすめ
ツールのダウンロードや、アバターの導入作業はPCに負荷がかかるため、<mark>不要なアプリケーションは終了させておく</mark>ことをおすすめします。
:::

<br>

### コミュニティの紹介

行き詰まったときは、周りのユーザーに相談するか、<mark>**アバター改変なんもわからん集会**</mark> のDiscordサーバーへ加入することをお勧めします。アバター導入や改変で躓いた点について、自由に質問が可能です。

* **[公式X (@wakaran_vrc)](https://x.com/wakaran_vrc)**
* **[Discordサーバーに参加する](https://t.co/tBeExLKot6)**

---

## ■ アバターの導入方法（Mac）
Macを使用されている方は、操作手順が異なります。以下のページを確認してください。

👉 **[アバターをアップロードする方法（Mac）](/editing)**

## ■ アバターの導入方法（Windows）

### 0. 準備：PCの名前を確認する
Windows PCでユーザー名が日本語になっていると、エラーの原因になります。

1. **スタートメニュー > 設定 > ホーム** を開く。
2. <mark>**PC名が半角英数字**</mark> になっているか確認してください。

<br>

## 1. Unity をインストールする
VRChatが指定する公式バージョンのUnityを導入します。

::: info 公式情報
現在の指定バージョンは **<mark>Unity 2022.3.22f1</mark>** です。
[こちら](https://creators.vrchat.com/sdk/upgrade/current-unity-version/) から公式の最新情報が確認できます。
:::

1. [Unityダウンロードページ](https://unity.com/ja/releases/editor/whats-new/2022.3.22f1)から **Manual installs > Other installs** の場所にある、<mark>**Unity 2022.3.22 (Download Assistant)**</mark> をダウンロードしてください。

2. ダウンロードした **Unity Download Assistant** を開いてください。
   <br>画面に従い、規約に同意してください。<br>**Components** の画面で以下の **3つのみ** を選択し、Continue をクリックしてください。

<div class="check-list">

- <mark>**Unity 2022.3.22f1**</mark>
- <mark>**Android Build Support**</mark>
- <mark>**iOS Build Support**</mark>

</div>
   
   画面に従い、ダウンロード、インストールしてください（時間がかかります）。

3. [Unity Hubのダウンロードページ](https://unity.com/ja/download) から、Unity Hubをダウンロードしてください。
   - ファイル **UnityHubSetup.exe** を開き、インストールしてください。
   - Unity Hubを起動し、**アカウント設定** から自身のアカウントを作成してください。

4. **Unity Hub > インストール(Install) > リストに追加(Locate)** に進み、先ほどインストールした Unity を選択してください。
   - すでにリストにある場合は飛ばしてOKです。
   - 通常は <CopyPath path="C:\Program Files\Unity 2022.3.22f1\Editor" /> にあります。

> [!IMPORTANT] 
> **これで、Unity Hub は用済みです。これ以降は Unity Hub を起動する必要はありません。**

## 2. ALCOM をインストールする

ALCOMは、プロジェクトやプログラムを管理するための非常に便利なツールです。

1. [ALCOM公式サイト](https://vrc-get.anatawa12.com/ja/alcom/)からダウンロードしてインストールしてください。

2. 起動後、セットアップ手順に従ってください。

3. **<mark>「ALCOMと VCC: URLを紐付ける」</mark>** にチェックを入れるのがおすすめです。

## 3. ツールを ALCOM へ導入する

ALCOM を開いてください。まずは、色々なツールを導入します。<br><br>
**パッケージ&テンプレート > VPMリポジトリを追加** に進み、下の表のリンクをコピーして貼り付けてください。

| ツール名 | VPMリポジトリURL (クリックでコピー) |
| :--- | :--- |
| **lilToon** | <CopyUrl url="https://lilxyzw.github.io/vpm-repos/vpm.json" /> |
| **Modular Avatar** | <CopyUrl url="https://vpm.nadena.dev/vpm.json" /> |
| **AvatarMenuCreator** | <CopyUrl url="https://suzuryg.github.io/vpm-repos/vpm.json" /> |
| **FaceEmo** | <CopyUrl url="https://suzuryg.github.io/vpm-repos/vpm.json" /> |
| **VRCQuestTools** | <CopyUrl url="https://kurotu.github.io/vpm-repos/vpm.json" /> |
| **Avatar Optimizer** | <CopyUrl url="https://vpm.anatawa12.com/vpm.json" /> |

各ツールの詳細は、[こちら](/tool-details) を参照してください。

## 4. Projectを作成する

1. ALCOM右上の **[プロジェクトを作成]** をクリックしてください。

2. **種類:** アバター / **Unityバージョン:** 2022.3.22f1 を選択します。

3. **Project名** を任意のものに設定して、[作成する] をクリック。

::: warning ❗️注意❗️
予期せぬ不具合が生じることがあるため、 **<mark>Project名 は 英数字のみ</mark>** にしてください。
:::

<br>

4. 作成した Project に各ツールを導入します。<br>
   - プロジェクトのメニューから  **管理** をクリックしてください。
   - 検索欄に、「 lilToon 」と入力してください。
   - lilToon のチェックボックスに、チェックを入れてください。
   - 続けて、以下のツール名を入力し、それぞれにチェックを入れてください。

| ツール名（クリックでコピーできます） |
| :--- |
| <CopyPath path="Modular Avatar">**Modular Avatar**</CopyPath> |
| <CopyPath path="AvatarMenuCreator">**AvatarMenuCreatorForMA**</CopyPath> |
| <CopyPath path="FaceEmo">**FaceEmo**</CopyPath> |
| <CopyPath path="VRCQuestTools">**VRCQuestTools**</CopyPath> |
| <CopyPath path="Avatar Optimizer">**Avatar Optimizer**</CopyPath> |
| <CopyPath path="Gesture Manager">**Gesture Manager**</CopyPath> |

<br>
<mark>選択したものをインストール</mark> > 適用をクリックしてください。<br>
「選択されたパッケージをインストールしました。」と表示されれば完了です。
<br>

**[UNITYを開く]** をクリックして、起動するのをしばらく待ちましょう。

## 5. アバターをインポートする

1. Boothで購入したアバターのデータをダウンロードしてください。<br>
アバターのデータのフォルダ内に含まれている、 <mark>**○○○.unitypackage** をダブルクリック</mark>してください。

2. 多くのリストを含んだウィンドウが表示されます。右下の **Import** をクリックしてください。

3. Unityの画面下側(Project) に、アバターのデータがインポートされます。<br>
各データをクリックすると、Unity画面の下側にファイル名が表示されます。<br>
インポートしたデータのフォルダ内から  <mark>**.prefab**</mark>  (プレハブ) という種類のファイルを見つけてください。<br>
<mark>**prefab**ファイルを 画面左上の **Hierarchy** へドラッグ＆ドロップ</mark>してください。

4. Hierarchy上で、アバターの大元となるObject(ルート)をクリックしてください。<br>
<mark>画面右側の **Inspector**</mark> を一番下にスクロールして、<mark>**Add Component** をクリック</mark>してください。<br>
検索欄に、<mark>**AAO Trace and Optimize**</mark> を入力し、選択してください。

5. ctrl + s を押して、適当なアバター名(英数字) を入力し、保存してください。

## 6. VRChat にアップロードする

1. Unityの画面上側の**VRChat SDKタブ > Show Control Panel** を選択してください。<br>VRChat で使用しているアカウント情報を入力し、Sign in をクリックしてください。<br>アカウントに登録しているメールアドレス宛に one-time code が送られるので、これを入力して Verify をクリックしてください。

2. **Builder** タブで設定を行います。
   - **Name:** アバターの表示名（自由、日本語でもOK）
   - **Visibility:** ⚠️ 必ず <mark>**Private** を選択してください。</mark> <br>(Private以外を選択すると、規約違反 となる場合があります。)

Capture In Scene > Capture で適当なサムネイルが作れます。
サムネイル用の画像ファイルがあるならば、Select Image からファイルを選択してください。

3. **Review Any Alerts** で <mark>**八角形の赤い！マーク**</mark> が出た場合のみ、右側の  <mark>**Auto Fix** をクリック</mark>してください。

4. **Build & Publish** をクリックしてください。<br>
**Upload Succeeded!** という表示が出たら、アップロード完了です。

<br>

PC を使わず、VRゴーグル単機 で VRChat をプレイしている人は、あと少し、操作が必要です。<br>
手順７に進んでください。

**PC を使って VRChat をプレイしている人は、これで終了**なので、Unityを閉じて大丈夫です。<br>
VRChat 内の アバターメニュー > アップロードしたもの に、自分でアップロードしたアバターが表示されています。

## 7. Quest (Android) 対応させる

VRゴーグル単機でプレイする方は、以下の手順も行ってください。

1. Unityの画面上側の  **Toolsタブ > VRCQuestTools > Convert Avatar for Android** を選択してください。

ウインドウ内に**八角形の赤い！マーク**が 表示されない 場合、手順８に進んでください。

ウインドウ内に<mark>**八角形の赤い！マーク** が **表示された** 場合</mark>、軽量化の操作が必要です。

 **Avatar Dynamics 設定** を選択してください。

「 Android用にアップロードできません｡ 」という表記がなくなるようにチェックを外し、PhysBone などを削減してください。

チェックボックスがとても多い時は、ウィンドウ上部の 全て解除する を選択してから、チェックを入れるといいです。

よくわからない場合は、チェックボックスをすべて外して、次に進んでください。

|  | 説明 |
| :--- | :--- |
| **PhysBones** | 髪の毛や衣服の裾などの、揺れ物に使われる骨組み |
| **PhysBone Collider** | PhysBones の動きを制御するためのもの |
| **Contact Senders, Receivers** | 触れたときに反応する部位 |

<br>

「 Android用にアップロードできません｡ 」という表記がなくなったら、**適用** をクリックしてください。

## 8. Quest対応させたアバターをアップロードする

1. **[非破壊的に変換する]** をクリックしてください。

2. VRChat SDK の画面で、Platform に **Android** のみにチェックボックスを入れて、プラットフォームを切り替えてください。<br>
このとき、VRChat SDK の画面内に「 八角形の赤い！マーク 」が現れることがありますが、すべて**無視**して構いません。ツールが自動的になんとかしてくれます。

3. **Build & Publish for Android** をクリックしてください。

 **アップロードに成功しました。** という表示が出たら、アップロード完了です。

VRChat 内の アバターメニュー > アップロードしたもの に、自分でアップロードしたアバターが表示されています。

以上！！！

<br>
良きVRCライフをお送りください。