import Ryo from '@/assets/members/ryo.png'
import Rin from '@/assets/members/りん.jpg'
import 田口雅弘 from '@/assets/members/田口雅弘.jpg'
import 宮本 from '@/assets/members/宮本.jpg'
import たけうちまりえ from '@/assets/members/たけうちまりえ.jpg'
import 早川優衣 from '@/assets/members/早川優衣.jpg'

import Issue1 from "@/assets/issue1.svg";
import Issue2 from "@/assets/issue2.svg";
import Issue3 from "@/assets/issue3.svg";
import Issue4 from "@/assets/issue4.svg";
import Issue5 from "@/assets/issue5.svg";
import Issue6 from "@/assets/issue6.svg";
import Issue7 from "@/assets/issue7.svg";
import Issue8 from "@/assets/issue8.svg";
import Balloon1 from "@/assets/balloon1.svg";
import CommingSoon from "@/assets/comming-soon.svg";

export const resources = {
    faq: [
        {
            q: "中四国地方以外の人も参加できますか？",
            a: "もちろんです！ ただしイベントは中四国がメインとなるのでご了承ください"
        },
        {
            q: "入会費はいくらですか？",
            a: <>
                入会費は完全無料です！なお、有料プランを選択された場合は月額料金が発生します<br />
                無料プランをご利用の場合は、永年無料でご利用いただけます
            </>
        },
        {
            q: "クレジット引き落とし日はいつですか？",
            a: <>
                入会した日が会費の引き落とし日となります（体験期間中の場合は、体験キャンペーン終了日が引き落とし日です）<br />
                また、体験期間中に解約した場合は料金が発生することはありませんので、ご安心ください
            </>
        },
        {
            q: "いつでも退会できますか？",
            a: "いつでも退会可能です。メンバー専用LINEにて、お問い合わせお願いします"
        },
        {
            q: "プランの変更はできますか？",
            a: "可能です！ メンバー専用LINEにて、お問い合わせお願いします"
        }
    ],
    links: {
        line: "https://s.lmes.jp/landing-qr/2006439228-oBz5G5DO?uLand=NxpEQ9",
        discord: "https://discord.gg/J8chE8qKky?openExternalBrowser=1",
        personalLine: "https://s.lmes.jp/landing-qr/2006439228-oBz5G5DO?uLand=NxpEQ9",
        personalInstagram: "https://www.instagram.com/tsuna_lab?igsh=aGVidzA2czQzcjk3",
    },
    members1: [

    ],
    members2: [
        {
            name: "RYO",
            job: <>SNSインフルエンサー<br />パーソナルトレーナー</>,
            details: <>
                Instagram フォロワー42万人<br />
                YouTube チャンネル登録者21万人<br />
                TikTok フォロワー18万人<br /><br />

                パーソナルジム ドリームビルド 設立<br />
                ゆるダン体操 書籍販売
            </>,
            image: Ryo
        },
        {
            name: "早川優衣",
            job: <>
                BMXレーサー<br />
                <div className='mt-1 text-[1.2rem] font-bold' style={{ lineHeight: '1.3rem' }}>
                    全日本自転車連盟公式<br />
                    アンバサダー
                </div>
            </>,
            details: <>

                YouTubeチャンネル登録者13万人<br /><br />

                2024年の全日本選手権年齢別クラスで優勝し、2025年の7月末の世界選手権への出場決定<br />
                2023年相席食堂上半期おかわり賞ランキング、第８位入賞<br />
                実は…千鳥のノブの姪っ子！<br />
            </>,
            image: 早川優衣
        },

        {
            name: "小町りん",
            job: <>
                SNSインフルエンサー<br />
                クリエイター
            </>,
            details: <>
                広島で活躍するインフルエンサー<br />
                YouTubeチャンネル登録者13万人<br /><br />

                TikTokやInstagramでも活動しており、<br />
                1日でグッズ販売売上を数十万円を記録
            </>,
            image: Rin
        },

        {
            name: "田口雅弘",
            job: <>TAG株式会社代表取締役<br />家電品コンシェルジュ<br />イチミリセミナー講師</>,
            details: <>
                講演家として各地でポンコツ人生から見つけたヒントを発信中<br />
                YouTubeなどのSNSで配信活動もしているパワフル社長
            </>,
            image: 田口雅弘
        },
        {
            name: "宮本",
            job: <>AIデザインアーキテクト<br />mori studio 代表</>,
            details: <>
                最新のAI技術とデザインの知見を融合させ、<br />
                企業のデジタルトランスフォーメーションをリード<br />
                クリエイティブ×テクノロジーの新しい可能性を追求し、<br />
                次世代のビジネスソリューションを生み出すWebの万屋さん
            </>,
            image: 宮本
        },
        {
            name: <>たけうち<br />まりえ</>,
            job: "デザイナー　Jalart design",
            details: <>
                デジタル(チラシ、名刺、ロゴなど)から<br />
                アナログ(似顔絵、壁画など)まで<br />
                短納期・低予算で承ります。<br />
                広島ものまね軍団のメンバーでもあり、<br />
                県内外のイベントで歌まねをしている(?)
            </>,
            image: たけうちまりえ
        },
    ],
    introduces: [
        {
            num: "01",
            title: "様々な人とつながる",
            content: <>
                オフライン交流会や各種イベントの開催<br />
                チャット上での交流<br />
                フリーランス、経営者、学生、社会人とつながれる
            </>,
            image: Issue1,
        },
        {
            num: "02",
            title: "集客や採用ができる",
            content: <>
                求人や案件、仕事の受発注<br />
                マルシェなどのイベント<br />
                商品やサービスの宣伝し放題
            </>,
            image: Issue7,
        },
        {
            num: "03",
            title: "スキルアップにつながる",
            content: <>
                セミナーの開催<br />
                スキルやノウハウなど<br />
                色んな情報をメンバー同士でシェア
            </>,
            image: Issue6,
        },
        {
            num: "04",
            title: "朝活ができる",
            content: <>
                平日の朝7時から8時まで<br />
                ポモドーロタイマーを活用した<br />
                Zoom朝活で生産性が高まります
            </>,
            baloon: Balloon1,
            image: Issue5,
        },
        {
            num: "05",
            title: "中四国を盛り上げられる",
            content: <>
                行政や民間と協力、協業して<br />
                各メンバーの力と知恵で<br />
                地域資源、問題、経済の課題解決に取り組む
            </>,
            image: Issue4,
        },
        {
            num: "06",
            title: "経済圏の構築",
            content: <>
                あのキャラクターがNFTに？<br />
                デジタルトークンを活用した地域創生
            </>,
            image: Issue8,
            baloon: CommingSoon,
        },
    ],
    planTable: {
        rows: [
            {
                チャンネル名: (
                    <>
                        🔔<br />
                        交流会
                    </>
                ),
                内容: (
                    <>
                        オフライン交流会を開催
                    </>
                ),
                一言: (
                    <>
                        中四国地方の各県ごとに<br />
                        オフライン交流会を<br />
                        開催予定！
                    </>
                ),
                フリープラン: "○",
                スモールプラン: "○",
                ビジネスプラン: "○",
            },
            {
                チャンネル名: (
                    <>
                        🔔<br />
                        セミナー・講演会
                    </>
                ),
                内容: (
                    <>
                        セミナーや講演会を開催
                    </>
                ),
                一言: (
                    <>
                        ビジネスやスキルアップに<br />
                        役立つセミナーを<br />
                        開催していきます！
                    </>
                ),
                フリープラン: "○",
                スモールプラン: "○",
                ビジネスプラン: (
                    <>
                        ○<br />
                        <small>スピーカー/講師<br />として登壇OK</small>
                    </>
                ),
            },
            {
                チャンネル名: (
                    <>
                        📣<br />
                        イベント告知
                    </>
                ),
                内容: (
                    <>
                        地域や企業のイベントなど<br />
                        宣伝広報
                    </>
                ),
                一言: (
                    <>
                        マルシェやお祭り、<br />
                        自社の懇親会など<br />
                        宣伝して集客してみよう！
                    </>
                ),
                フリープラン: (
                    <>
                        △<br />
                        <small>情報の<br />受け取りのみ</small>
                    </>
                ),
                スモールプラン: (
                    <>
                        △<br />
                        <small>情報の<br />受け取りのみ</small>
                    </>
                ),
                ビジネスプラン: "○",
            },
            {
                チャンネル名: (
                    <>
                        📣<br />
                        プロモーション
                    </>
                ),
                内容: (
                    <>
                        サービスや事業内容など<br />
                        宣伝広報
                    </>
                ),
                一言: (
                    <>
                        新商品やサービス、<br />
                        自社の活動を告知して<br />
                        認知拡大していこう！
                    </>
                ),
                フリープラン: (
                    <>
                        △<br />
                        <small>
                            情報の<br />
                            受け取りのみ
                        </small>
                    </>
                ),
                スモールプラン: (
                    <>
                        △<br />
                        <small>
                            情報の<br />
                            受け取りのみ
                        </small>
                    </>
                ),
                ビジネスプラン: "○",
            },
            {
                チャンネル名: (
                    <>
                        ☀️<br />
                        朝活
                    </>
                ),
                内容: (
                    <>
                        朝7時～8時までZoom朝活
                    </>
                ),
                一言: (
                    <>
                        朝から生産性を高めよう！顔出しや参加は自由です！
                    </>
                ),
                フリープラン: "×",
                スモールプラン: "○",
                ビジネスプラン: "○",
            },
            {
                チャンネル名: (
                    <>
                        💡<br />
                        情報共有
                    </>
                ),
                内容: (
                    <>
                        スキルやノウハウなど色んな情報をメンバーでシェア
                    </>
                ),
                一言: (
                    <>
                        AIやSNSの情報、マーケティングなどシェアしよう！
                    </>
                ),
                フリープラン: "×",
                スモールプラン: "○",
                ビジネスプラン: "○",
            },
            {
                チャンネル名: (
                    <>
                        💬<br />
                        交流・雑談
                    </>
                ),
                内容: (
                    <>
                        地元のトークなど自由に盛り上げてください
                    </>
                ),
                一言: (
                    <>
                        いろんな人と<br/>
                        交流してみよう
                    </>
                ),
                フリープラン: "×",
                スモールプラン: "○",
                ビジネスプラン: "○",
            },
            {
                チャンネル名: (
                    <>
                        🏃‍♀️<br />
                        サークル活動
                    </>
                ),
                内容: (
                    <>
                        サークルに所属して<br/>
                        親睦を深めよう
                    </>
                ),
                一言: (
                    <>
                        サークルは随時発足していきます
                    </>
                ),
                フリープラン: "×",
                スモールプラン: "○",
                ビジネスプラン: "○",
            },
            {
                チャンネル名: (
                    <>
                        👔<br />
                        求人募集
                    </>
                ),
                内容: (
                    <>
                        求人案内や募集し放題
                    </>
                ),
                一言: (
                    <>
                        新卒や中途採用、<br/>
                        アルバイトなど求人を<br/>
                        出してみよう！
                    </>
                ),
                フリープラン: "×",
                スモールプラン: (
                    <>
                        △<br />
                        <small>
                            問い合わせや<br />
                            応募のみ
                        </small>
                    </>
                ),
                ビジネスプラン: "○",
            },
            {
                チャンネル名: (
                    <>
                        💻<br />
                        案件募集
                    </>
                ),
                内容: (
                    <>
                        業務委託や<br/>
                        お仕事の依頼し放題
                    </>
                ),
                一言: (
                    <>
                        Web制作や動画編集、<br/>
                        コンサルタントなど<br/>
                        見つけてみよう！
                    </>
                ),
                フリープラン: "×",
                スモールプラン: (
                    <>
                        △<br />
                        <small>受注や応募のみ</small>
                    </>
                ),
                ビジネスプラン: "○",
            },
        ],
    }

}
