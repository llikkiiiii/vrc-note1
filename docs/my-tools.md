# 📦 便利な改変ツールの総まとめ

アバター改変で愛用しているツールについての完全ガイドです。

忘れないように書き留めたものを整理している場所でもあります。



## 💬 人に聞く時のコツ

<details>
<summary>わからないことは、周りのユーザーに相談するのが一番の近道です。（クリックで詳細を表示）</summary>

* **わからなかったら人に聞く**

    **良い聞き方の例:** 「〇〇をやりたいので、△△してみたけど、✗✗になってしまって、うまくいかなかった」
    
    目的・試したこと・結果を伝えると、教える側もめちゃくちゃ答えやすいです。

* **Unityの用語を知っておく**
    
    説明を受ける時に、単語の意味を知っておくと理解が早まります。

</details>


## 📚 Unity用語集（超基本）
用語を知っていると、解説記事やアドバイスが「呪文」に聞こえなくなります。

<details>

<summary>ここをクリックで確認する</summary>

| 用語 | ざっくりとした意味 |
| :--- | :--- |
| **VCC or ALCOM** | ツールやアバターのプロジェクトを管理するソフト |
| **Project** | アバター制作に必要なすべてのファイルが入っている「箱」のようなもの |
| **Assets** | 服、画像、ツールなど、プロジェクト内で使う「素材置き場」のこと（ウィンドウの左下） |
| **Object** | アバターや服などの「物体」そのもの |
| **Scene** | 実際にアバターを並べて作業する「舞台（空間）」のこと（ウィンドウの中央） |
| **Hierarchy** | Scene内に配置されているオブジェクトの一覧（ウィンドウの左上） |
| **Inspector** | 選択中のオブジェクトの詳細（位置、大きさ、色など）を設定する（ウィンドウの右） |
| **Console** | エラーが出た時に、何が起きたか教えてくれる（ウィンドウ左下） |
| **SDK** | VRChatにアバターを送るために必要なツール |
| **Prefab** | 設定済みのオブジェクトを保存した「型」。これをHierarchyに置くのが基本 |
| **Component** | オブジェクトに機能（揺れ、重力など）を追加する部品 |
| **Armature** | アバターの「骨組み」全体の構造のこと |
| **Bone** | Meshを動かすための、1本1本の「骨」 |
| **Mesh** | アバターの「形」そのもの |
| **Material** | Meshに貼り付ける「質感や色」の設定データ |
| **Texture** | Materialに使う「画像ファイル」のこと |
| **Play Mode** | Unity上で、実際にVRChatで動く様子を確認できる「テストモード」 |

</details>


## ⌨️ 操作・ショートカット集（便利！！）

### 基本操作
<details>
<summary>ここをクリックで確認する</summary>

| キー操作 | 内容 |
| :--- | :--- |
| **Ctrl + S** | 保存（こまめに！） |
| **Ctrl + Z** | 一つ前の操作を取り消す（元に戻す） |
| **Ctrl + Y** | 取り消した操作をやり直す |
| **Ctrl + C** | 選択したオブジェクトやファイルをコピーする |
| **Ctrl + V** | コピーしたものを貼り付ける |
| **Ctrl長押し + クリック** | オブジェクトを1つずつ追加で選択する |
| **Shift長押し + クリック** | 最初から最後までを範囲でまとめて選択する |
| **Ctrl + D** | 複製（オブジェクトやファイルを増やす） |
| **Ctrl + P** | プレイモード開始/終了 |
| **Fn2 (F2)** | 名前を変更 |
| **Alt + ツリーの矢印をクリック** | 全ての階層を一括で展開/折りたたむ |

</details>

---

### Scene（画面）操作
<details>
<summary>ここをクリックで確認する</summary>

| キー操作 | 内容 |
| :--- | :--- |
| **Q** | ハンドツール（視点移動） |
| **W / E / R** | 移動 / 回転 / スケール（拡大縮小） |
| **F** | 選択中のオブジェクトにフォーカス（迷子になったら押す） |
| **右クリック + W,A,S,D** | 前後左右に画面内を移動 |
| **右クリック + E,Q** | 上下に画面内を移動 |
| **V長押し + 移動** | 頂点スナップ（ぴったりくっつけたい時） |

</details>


## 🛠️ VCC or ALCOM から導入できるツール一覧

::: info **導入方法**
各ツールを導入するには、下のURLをコピーして、VCCの `Settings > Packages > Add Repository > Add` または、ALCOMの `パッケージ&テンプレート > VPMリポジトリを追加` で追加してください。
:::


<style scoped>
/* このページにある表だけをスクロール可能にしてヘッダーを固定する */
:deep(table) {
  display: block;
  max-height: 600px; /* スクロールが出る高さ */
  overflow-y: auto;
}

:deep(th) {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: var(--vp-c-bg-soft);
}
</style>

| ツール名 |  | クリックでコピー |
| :--- | :--- | :--- |
| **lilToon**|ド定番のシェーダー。必須。| <CopyUrl url="https://lilxyzw.github.io/vpm-repos/vpm.json" /> |
| **Modular Avatar**|アバター改変のためのツール。必須。| <CopyUrl url="https://vpm.nadena.dev/vpm.json" /> |
| **AvatarMenuCreatorForMA**|小物の出し入れなど、エクスプレッションメニューを自動で作る神ツール。<br>このツールを使わない場合、｢MA Object Toggle｣｢MA Menu Item｣｢MA Menu Installer｣ の３つを扱う必要がある。| <CopyUrl url="https://vpm.narazaka.net/index.json" /> |
| **FaceEmo**|表情の設定や切り替えを簡単にできる神ツール。<br><details><summary>もう少し解説</summary>アバターによっては、メニューを追加すると表情がバグることもある。</details> | <CopyUrl url="https://suzuryg.github.io/vpm-repos/vpm.json" /> |
| **VRCQuestTools**|アバターをほぼ自動でQuest対応させる神ツール。<br><details><summary>もう少し解説</summary>マテリアルの自動変換や、非破壊でボーンの削減ができる。</details> | <CopyUrl url="https://kurotu.github.io/vpm-repos/vpm.json" /> |
| **Gesture Manager**|アバターの動きやエクスプレッションメニューの操作をUnity上で確認できるツール。<br>作業効率が上がる。必須。| <CopyUrl url="" /> |
| **AAO: Avatar Optimizer**|アバターを自動で軽量化・最適化する神ツール。<br>AAO Trace and Optimize をアバターのルートに全員追加すべし。勝手に軽量化される。<br>他にも便利機能が豊富。| <CopyUrl url="https://vpm.anatawa12.com/vpm.json" /> |
| **VRCFury**|海外のギミックに使われている事が多い。| <CopyUrl url="https://vcc.vrcfury.com/" /> |
| **Poiyomi Toon Shader**|装飾品によく使われるシェーダー。| <CopyUrl url="https://poiyomi.github.io/vpm/index.json" /> |
| **UnlitWF Shader**|装飾品によく使われるシェーダー。| <CopyUrl url="https://whiteflare.github.io/vpm-repos/vpm.json" /> |
| **anatawa12’s gist pack**|Unity内でアバターのパフォーマンスランクを確認できる神ツール。<br><details><summary>もう少し解説</summary>Toolsタブ > anatawa12's gist selector > Actual Performance Window > Apply Changes</details> | <CopyUrl url="https://vpm.anatawa12.com/vpm.json" /> |
| **lilAvatarUtils**|アバター改変を効率化するための神ツール。<br>アバターに使われているテクスチャを一覧表示したり、解像度を変更したり、Safetyが掛かっている状態でのアバターの姿を確認できる。| <CopyUrl url="https://lilxyzw.github.io/vpm-repos/vpm.json" /> |
| **Puko's Texture Replacer**|アバター内の全てのテクスチャを、非破壊で一括で置き換えることが出来る神ツール。<br>lilAvatarUtilsに似た機能があるが、非破壊で置き換えられるのが良い。| <CopyUrl url="https://vpm.pukosrv.net/" /> |
| **Unity AutoSave**|Sceneを自動で保存してくれる神ツール。<br><details><summary>もう少し解説</summary>さたにあしょっぴんぐタブ > Unity自動セーブ > Auto Save</details> | <CopyUrl url="https://SaturnianJP.github.io/AutoSaveScript-for-Unity/index.json" /> |
| **VRCHierarchyHighlighter**|Hierarchy が見やすくなる神ツール。<br>Windowタブ > VRCHierarchyHighlighter で、Show Icons のチェックを外すのがおすすめ。| <CopyUrl url="https://raw.githubusercontent.com/AzuriteLab/azlab_vrc_repos/main/index.json" /> |
| **lilEditorToolbox**|HierarchyとProject が見やすくなる神ツール。<br>Editタブ > Preferences… > lilEditorToolbox で、各項目チェックを入れる。| <CopyUrl url="https://lilxyzw.github.io/vpm-repos/vpm.json" /> |
| **AvatarPoseLibrary**|エモートアニメーションを自動設定してくれる神ツール。| <CopyUrl url="https://HhotateA.github.io/AvatarPoseLibrary/index.json" /> |
| **Skinned Mesh Constraint Builder**|ボーンではなく、メッシュにオブジェクトを追従させるための神ツール。| <CopyUrl url="https://hai-vr.github.io/vpm-listing/index.json" /> |
| **Mask Texture Editor**|Unity上でマスクテクスチャを作成,編集できる神ツール。<br>Modular AvatarのMesh Cutterコンポーネントと組み合わせて使うと便利。| <CopyUrl url="https://vpm.nekobako.net/index.json" /> |
| **lilycalInventory**|LightChangerのprefabを導入すると、明るさ調整メニューが追加される神ツール。<br>エクスプレッションメニューの作成もできる。| <CopyUrl url="https://lilxyzw.github.io/vpm-repos/vpm.json" /> |
| **TexTransTool**|Unity内でのテクスチャの編集に便利な神ツール。<br>軽量化もできる。<br><details><summary>もう少し解説</summary>アバターのルートを選択し、TexTransTool > TTT AtlasTexture を選択し、組み合わせた衣装のマテリアル同士を選択すると、マテリアルを圧縮できる。アトラス化によって軽量化も可能。</details> | <CopyUrl url="https://vpm.rs64.net/vpm.json" /> |
| **Texture Color Adjuster**|テクスチャの色合い調整のための神ツール。| <CopyUrl url="https://nekoare.github.io/texture-color-adjuster/index.json" /> |
| **Meshia Mesh Simplification**|ポリゴン数を削減するための神ツール。| <CopyUrl url="https://ramtype0.github.io/VpmRepository/index.json" /> |
| **NDMF VRM Exporter**|アバターをVRM変換できる神ツール。| <CopyUrl url="https://hkrn.github.io/vpm.json" /> |
| **VRMConverterForVRChat**|アバターをVRM変換できる神ツール。| <CopyUrl url="https://esperecyan.github.io/VRMConverterForVRChat/registry.json" /> |
| **Avatar Compressor**|アバターのテクスチャが軽量化する神ツール。| <CopyUrl url="https://vpm.limitex.dev/index.json" /> |

<br>


## 📦 Unitypackage 導入ツール
VCCやALCOMではなく、BOOTHからダウンロードしてインポートするツール。

### **[MeshDeleterWithTexture](https://booth.pm/ja/items/1501527)**
  - テクスチャを塗った場所のメッシュを消せる。（AAOでも同様の機能あり）
### **[AddPreSuffixTool](https://booth.pm/ja/items/2764237)**
  - ボーン名などに一括で文字を追加・削除できる。
### **[Uni-Lattice（ユニラティス）](https://booth.pm/ja/items/7393100)**
  - 衣装からはみ出た部分の微調整に便利。800円。


## 動作環境の設定
- **Play Modeへの切り替えを速くする**<br>
  **Edit** > **Project Settings...** > **Editor** > **Enter Play Mode Settings** を探し、**Enter Play Mode Options** のみにチェックを入れる。

- **デバッグを有効にする**<br>
  Unity画面右下の **虫のアイコン** をクリックし、**"Switch to debug mode"** を選択する。

## 視認性の調整（Sceneビュー）
- カメラの歪みを抑える:<br>
**Scene Camera Field of View → 40** に設定（拡大してもアバターが歪まずに見える）

- 背景をスッキリさせる:<br>
**Toggle Skybox → Off**（空の描画を消してアバターを見やすくする）

- パーティクルを表示:<br>
**Toggle Particle System → On**

## カメラとライトの調整
アバターの正面がきれいに映るように設定する。

| オブジェクト | 設定項目 | 値 |
| :--- | :--- | :--- |
| **Main Camera** | Position | Z: 1 |
| | Rotation | Y: 180 |
| **Directional Light** | Rotation | Y: 180 |
| | Color | White (R:255 G:255 B:255) |


## 便利な Component 解説
アバターに付ける「部品」の役割。Modular Avatar (MA) や AAO のコンポーネントを使いこなすと、改変の自由度が上がる。

### Modular Avatar (MA) 関連
| コンポーネント名 | 解説 |
| :--- | :--- |
| **MA Mesh Settings** | Setup Outfit を実行した際、衣装のルートに自動で追加される。 |
| **MA Merge Armature** | Setup Outfit を実行した際、衣装のArmatureに自動で追加される。<br>※非対応衣装などでボーン構造や命名が異なる場合は、手動で調整を行う必要がある。 |
| **MA Bone Proxy** | アクセサリーを追従させる際に使用する。オブジェクトを直接ボーンの中に入れずに済むため、**Hierarchy構造を綺麗に保ったまま**管理できる。 |
| **MA Scale Adjuster** | 子ボーンに影響を与えることなく、オブジェクトの大きさを調整する。 |
| **MA Object Toggle** | このComponentがあるObjectが **On** のとき、指定したObjectの表示・非表示を切り替える。 |
| **MA Shape Changer** | このComponentがあるObjectが **On** のとき、指定したObjectの **Blend Shapes**（シェイプキー）の値を変更する。衣装の着脱時に生じる干渉を防ぐのに役立つ。 |
| **MA Mesh Cutter** | このComponentがあるObjectが **On** のとき、指定したObjectの **Mesh（ポリゴン単位）** の表示・非表示を切り替える。 |
| **MA Visible Head Accessory** | 自分の髪の毛など、通常は見ることができない「Head追従オブジェクト」を自分視点で見えるように設定する。 |
| **VRC Head Chop** | 頭以外に追従するオブジェクトを自分視点で見えないように設定する。 |



### AAO (Avatar Optimizer) 関連
| コンポーネント名 | 解説 |
| :--- | :--- |
| **AAO Trace And Optimize** | **【必須】** アバターのルートに追加すべし。<br>全自動で不要なデータを削除・軽量化してくれる。 |
| **AAO Remove Mesh in BlendShape** | 指定したBlendShapeによって動くポリゴンを削除する。 |
| **AAO Remove Mesh in Box** | 箱で指定した範囲のポリゴンを削除する。 |
| **AAO Remove Mesh in Mask** | マスクテクスチャで指定した範囲を削除する。MeshDeleterWithTexture の機能と同様。 |
| **AAO Merge Skinned Mesh** | 複数のメッシュを1つに統合して描画負荷を下げる。※アニメーションでの個別ON/OFFはできなくなる。<br>**[勉強中]** |
| **AAO Merge PhysBone** | 複数のPhysBoneコンポーネントを1つに統合します。<br>**[勉強中]**  |

<br>


<br>

---

<br>

各ツールの詳細や、使い方のコツなどは **りっきー** まで！