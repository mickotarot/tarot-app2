const tarotCards = [
  {
    name: "愚者",
    upright: "新しい始まり。自由な発想で一歩踏み出して。",
    reversed: "無計画さに注意。勢いだけで進まないこと。"
  },
  {
    name: "魔術師",
    upright: "才能とチャンスが揃っています。行動あるのみ。",
    reversed: "力を正しく使えていません。初心に戻って。"
  },
  {
    name: "女教皇",
    upright: "直感を信じて。答えは内側にあります。",
    reversed: "感情を抑え込みすぎています。心の声を聞いて。"
  },
 {
    name: "女帝",
    upright: "愛と豊かさ。育てることで物事が実ります。",
    reversed: "甘えすぎに注意。自立を意識して。"
  },
  {
    name: "皇帝",
    upright: "安定、責任感。経済的安定。社会的地位を得られます。",
    reversed: "威圧的な態度、自己過信に注意。"
  },
  {
    name: "法王",
    upright: "寛大な心。慈愛、安心感。援助を得られます。",
    reversed: "視野が狭い、孤立無縁、出し惜しみや猜疑心に注意。"
  },
  {
  name: "恋人",
  upright: "調和と安定。楽しい時間を過ごせる。甘いムード",
  reversed: "一夜漬け、その場限り、三角関係、飽きっぽい長続きしない関係"
  },
  {
  name: "戦車",
  upright: "挑戦と前進。行動力が伴う勝利。自立心がありよいスタートを切れる。",
  reversed: "暴走に注意。無計画に動き失敗。強引さが裏目に"
  },
  {
  name: "力",
  upright: "エネルギッシュで達成する。自信に満ち溢れ目的を達成。",
  reversed: "気の弱さやエネルギー不足。自信のなさで望む結果が出ない"
  },
  {
  name: "隠者",
  upright: "内面を見つめる深い精神性を持つ。包容力を持つ。",
  reversed: "心を閉ざす。閉鎖的で孤立。神経質になりすぎる。"
  },
  {
  name: "運命の輪",
  upright: "拡大と発展。突然舞い込むチャンス。幸運につながる出来事",
  reversed: "すれ違い、同じ失敗を繰り返す、自分ではどうにもできないことで進めない"
  },
  {
  name: "正義",
  upright: "正義と正しいバランス。合理的で平等な思考。冷静な判断力",
  reversed: "バランスが崩れている。契約違反、価値観のズレ"
  },
  {
  name: "吊るされた男",
  upright: "実りを得るための試練。報われる努力。我慢が必要",
  reversed: "報われない忍耐、終わりが見えない苦労。動けない状況。"
  },
  {
  name: "死神",
  upright: "仕切り直し。完全な終わり。転職、別れ、環境の変化",
  reversed: "価値観の変化。新しい世界。新しい才能の開花。転換期"
  },
  {
  name: "節制",
  upright: "コントロールする力。浄化と秩序、予定調和、穏やかなコミュニケーション",
  reversed: "不調和、悪い環境、汚染、不摂生、マンネリ化"
  },
  {
  name: "悪魔",
  upright: "物質にとらわれすぎる、腐れ縁、不倫や略奪、依存状態。",
  reversed: "逆境の終わり、解放、目覚める、苦手なものと縁を切る"
  },
  { 
  name: "塔",
  upright: "突然のトラブル。予定変更、固定概念の崩壊、強制執行",
  reversed: "小さなトラブル緊迫した状態、予想外の出来事"
  }, 
  {
  name: "星",
  upright: "希望、夢が叶う、未来、最先端、能力開発、美しい外見",
  reversed: "高すぎる理想、間違った目標設定"
  },
  { 
  name: "月",
  upright: "不安、暗中模索、三角関係、不安定な気持ち",
  reversed: "はっきりわかる、もやが晴れる、真実がわかる"
  },
  {
  name: "太陽",
  upright: "大成功、明るい精神、夢や希望が理想通りに実現する。",
  reversed: "ネガティブ、いきあたりバッタリ。まだこれから。子供っぽい"
  },
  {
  name: "審判",
  upright: "最終的な答え、真実、復活、許し。よりが戻る、家庭円満",
  reversed: "答えが出せない、停滞感、タイミングが合わない。"
  },
  {
  name: "世界",
  upright: "完成、自己実現、円満、自分を理解する、やり遂げる、有終の美を飾る",
  reversed: "未完成で終わる。中途半端な状態。物足りない。"
  }







];

document.getElementById("drawButton").addEventListener("click", () => {
  const shuffled = tarotCards.sort(() => 0.5 - Math.random());
  const drawnCards = shuffled.slice(0, 3);

  drawnCards.forEach((card, index) => {
    const isUpright = Math.random() > 0.5;
    const positionName = index === 0 ? "過去" : index === 1 ? "現在" : "未来";
    document.getElementById(`card${index + 1}`).innerHTML = `
      <strong>${positionName}: ${card.name} (${isUpright ? "正位置" : "逆位置"})</strong>
      <p>${isUpright ? card.upright : card.reversed}</p>
    `;
  });
  document.getElementById("result").classList.remove("hidden");
});
