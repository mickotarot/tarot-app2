const tarotCards = [
  {name: "愚者",
  upright: `新しい始まり。自由な発想で一歩踏み出して。
今のあなたは、まだ白紙の地図を手にしている段階です。
先のことが完全に見えていなくても、それは失敗ではありません。
むしろ今は「計画よりも直感」を信じて動くことで、思いがけない扉が開きます。
周囲からは無謀に見える選択でも、あなた自身がワクワクしているなら、その感覚は正しい可能性が高いでしょう。
経験や肩書きよりも、「やってみたい」という純粋な気持ちが、あなたを正しい場所へ導いてくれます。
恐れすぎず、過去に縛られず、軽やかに一歩を踏み出してください。
このカードは、「今のあなたなら、転んでも立ち上がれる」と伝えています。`,
  reversed: `無計画さに注意。勢いだけで進まないこと。
本来の自由さが、今は「軽率さ」や「現実逃避」に傾いているかもしれません。
やりたい気持ちだけが先行し、足元を確認しないまま進もうとしていませんか？
このカードは「やめなさい」と言っているわけではありません。
ただ、ほんの少しだけ立ち止まり、最低限の準備や確認をする必要があると告げています。
今は一歩踏み出す前に、
・誰に影響が出るのか
・続けられる環境か
・逃げたいだけではないか
を自分に問いかけてみてください。
自由は大切ですが、責任とセットで初めて本物になります。
焦らず、地面を見てから歩き出せば、同じ道でも結果は大きく変わるでしょう。`
}

  { name: "魔術師", upright: "才能とチャンスが揃っています。行動あるのみ。", reversed: "力を正しく使えていません。初心に戻って。" },
  { name: "女教皇", upright: "直感を信じて。答えは内側にあります。", reversed: "感情を抑え込みすぎています。心の声を聞いて。" },
  { name: "女帝", upright: "愛と豊かさ。育てることで物事が実ります。", reversed: "甘えすぎに注意。自立を意識して。" },
  { name: "皇帝", upright: "安定と責任。社会的な成功。", reversed: "支配的になりすぎています。" },
  { name: "法王", upright: "導きと助言。信頼できる存在。", reversed: "視野が狭くなっています。" },
  { name: "恋人", upright: "調和と愛。大切な選択。", reversed: "迷いや不誠実さ。" },
  { name: "戦車", upright: "前進と勝利。強い意志。", reversed: "暴走に注意。" },
  { name: "太陽", upright: "成功と喜び。明るい未来。", reversed: "自信不足。" },
  { name: "世界", upright: "完成と達成。満足感。", reversed: "未完成。" }
];

document.getElementById("drawButton").addEventListener("click", () => {
  const shuffled = [...tarotCards].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);

  selected.forEach((card, index) => {
    const isUpright = Math.random() > 0.5;
    const label = index === 0 ? "過去" : index === 1 ? "現在" : "未来";

    document.getElementById(`card${index + 1}`).innerHTML = `
      <strong>${label}：${card.name}（${isUpright ? "正位置" : "逆位置"}）</strong>
      <p>${isUpright ? card.upright : card.reversed}</p>
    `;
  });

  document.getElementById("result").classList.remove("hidden");
});

