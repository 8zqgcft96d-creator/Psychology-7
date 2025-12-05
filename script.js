// script.js
// 依賴 Chart.js (已於 index.html 引入)

const QUESTIONS = [
  {text: '當你遇到一個新的挑戰/ 任務時，你的第一反應是：', choices: ['(A) 馬上跳進去、先試看看','(B) 先觀察環境、研究方式','(C) 有點猶豫、怕搞砸、先做部分準備','(D) 幫助他人、在背後支撐或配合']},
  {text: '在人際互動中，當朋友需要幫忙 /情緒低落時，你通常會：', choices:['(A) 鼓勵他們「快起來、一起去做點什麼」','(B) 安靜陪伴、傾聽他們說出來','(C) 有點退縮、不太確定怎麼幫比較好','(D) 主動提供支持、做好後勤或照顧他們']},
  {text: '當你在思考人生或尋找方向時，你偏好哪種方式？', choices:['(A) 設定目標、立刻動手實踐','(B) 深入思考、寫筆記、分析可能性','(C) 小心翼翼、怕錯、慢慢走','(D) 和他人分享、互相支持、一步一腳印']},
  {text: '面對失敗或挫折，你最可能的反應是：', choices:['(A) 立刻反彈、再戰一次','(B) 自我反省、思考教訓','(C) 感到沮喪、有點退縮、怕再犯錯','(D) 尋求或提供人際支持、共同面對']},
  {text: '如果要選擇你最看重的特質，是哪一項：', choices:['(A) 冒險精神/行動力','(B) 思考深度/內在探索','(C) 謹慎/安全感','(D) 溫暖/支持他人']}
];

const TYPE_MAP = {0:'馬',1:'男孩',2:'狐狸',3:'鼴鼠'};

const ANALYSES = {
  '馬': `你是【馬型】：\n\n你習慣當那個「載大家走過去」的人。\n\n你的樣子：\n你很習慣扛責任、撐住場面。很多時候，你自己其實也會累、也會彷徨，可是你會先問：「大家還好嗎？」你是那種會陪著別人走一段的人，願意當那匹穩穩向前的馬。\n\n你給人的感覺：\n你讓人有安全感。只要你在，事情好像就能慢慢被處理好。很多人會在不知不覺中依賴你、把難題丟給你，因為你看起來總是知道該怎麼做。\n\n給你的提醒：\n你不是永遠都要那麼堅強。當你覺得很重的時候，也可以停下來，把一些重量放回去，或者請別人幫忙扛一點。有時候，真正的力量不是一直往前衝，而是敢在需要的時候說：「我也想被照顧。」`,

  '男孩': `你是【男孩型】：\n\n關於自己，你還在學著怎麼相信。\n\n你的樣子：\n你有很強的感受力，對世界充滿好奇，也對自己充滿問號。你常常會想：「我到底夠不夠好？」「我能不能被喜歡、被理解？」這種敏感，讓你更容易看見別人的情緒，也更容易忽略自己的需要。\n\n你給人的感覺：\n在別人眼中，你像一個正在長大的孩子，真誠、直接、很真實。你會為了關係不斷自我檢討，只想讓自己變得更好。很多人因為你願意說出脆弱，而覺得被陪伴。\n\n給你的提醒：\n你不需要完美才值得被愛。試著多看看自己已經做得不錯的地方，允許「還在路上」的自己存在。當你願意對自己溫柔一點，你就會發現：原來你早就已經是某個人心裡，很重要的那個存在。`,

  '狐狸': `你是【狐狸型】：\n\n你看得很清楚，只是習慣把心收好。\n\n你的樣子：\n你敏銳、細心，對人的真心假意、情況的危險程度，有一種直覺式的判斷。你不會輕易把自己交出去，因為你知道受傷有多痛，所以寧可慢一點、再確定一點。\n\n你給人的感覺：\n一開始，你可能讓人覺得有距離、有點冷，但真正走進你心裡的人都知道：你其實非常忠誠、非常有義氣。你不會亂承諾，一旦說出口，就會盡力做到。\n\n給你的提醒：\n保持界線是好事，但也別把自己關得太緊。不是每個人都會像過去那些人一樣傷你。你可以試著多給世界一點點機會—不是為了別人，而是為了讓自己有機會被好好對待。`,

  '鼴鼠': `你是【鼴鼠型】：\n\n你的溫柔，是世界很需要的安慰。\n\n你的樣子：\n你很重視「舒服感」——食物、氣氛、陪伴、小確幸。你知道人不可能每天都很強，所以你特別會照顧情緒、照顧氣氛。你會為別人準備點心、傳訊息問候、講些好笑的話，讓沉重變得沒那麼可怕。\n\n你給人的感覺：\n你像一個會做甜點的好朋友，可能不會給一大串理性分析，但總會讓人覺得：「跟你在一起就不那麼難過了。」多人其實靠你的存在，才撐過了一些很黑暗的日子。\n\n給你的提醒：\n在照顧別人之前，也別忘了問一句：「那我自己呢？」你值得把同樣的溫柔，留一份給自己。偶爾不用那麼逗趣、那麼體貼，也沒關係—就算今天只想躺著，你一樣是很可愛的你。`
};

// DOM
const qnumEl = document.getElementById('qnum');
const qtextEl = document.getElementById('qtext');
const choicesEl = document.getElementById('choices');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const questionWrap = document.getElementById('questionWrap');

const radarCanvas = document.getElementById('radar');
const resultPanel = document.getElementById('resultPanel');
const typeTitle = document.getElementById('typeTitle');
const typePerc = document.getElementById('typePerc');
const fullAnalysis = document.getElementById('fullAnalysis');

const exportBtn = document.getElementById('export');
const restartBtn = document.getElementById('restart');

let current = 0;
let answers = new Array(QUESTIONS.length).fill(null);

// Chart.js radar
const radarCtx = radarCanvas.getContext('2d');
let radarChart = new Chart(radarCtx, {
  type: 'radar',
  data: { labels: Object.values(TYPE_MAP),
    datasets: [{ label: '目前分布', data: [0,0,0,0], fill: true, tension: 0.2, pointRadius: 4, backgroundColor:'rgba(11,132,255,0.12)', borderColor:'rgba(11,132,255,0.9)'}]
  },
  options: {
    responsive:true,
    maintainAspectRatio:false,
    scales:{ r: { min:0, max:100, beginAtZero:true } },
    plugins:{ legend:{display:true} }
  }
});

function renderQuestion(i){
  const q = QUESTIONS[i];
  qnumEl.textContent = `題目 ${i+1} / ${QUESTIONS.length}`;
  qtextEl.textContent = q.text;
  choicesEl.innerHTML = '';
  q.choices.forEach((c,ci)=>{
    const el = document.createElement('div');
    el.className = 'choice';
    el.tabIndex = 0;
    el.innerHTML = `<div class="dot">${['A','B','C','D'][ci]}</div><div class="label"><div style="font-weight:700">${c}</div></div>`;
    if(answers[i]===ci) el.classList.add('selected');
    el.addEventListener('click', ()=> selectChoice(i,ci));
    el.addEventListener('keydown', e=>{ if(e.key === 'Enter') selectChoice(i,ci); });
    choicesEl.appendChild(el);
  });
  prevBtn.disabled = (i===0);
  nextBtn.textContent = (i===QUESTIONS.length-1) ? '完成' : '下一題';
  updateProgress();
}

function selectChoice(qIdx, cIdx){
  answers[qIdx] = cIdx;
  Array.from(choicesEl.children).forEach((el,idx)=> el.classList.toggle('selected', idx===cIdx));
  updateProgress();
}

function computeScoresFromAnswers(ansArr){
  // 回傳物件 keys: 0..3 => count
  const tmp = {0:0,1:0,2:0,3:0};
  ansArr.forEach(a=>{
    if(a===null||a===undefined) return;
    tmp[a]++;
  });
  return tmp;
}

function updateProgress(){
  const done = answers.filter(a=>a!==null).length;
  const pct = Math.round((done/QUESTIONS.length)*100);
  progressBar.style.width = pct + '%';

  // 預覽雷達（百分比）
  const preview = computeScoresFromAnswers(answers);
  const total = Object.values(preview).reduce((s,v)=>s+v,0) || 1;
  const vals = [0,1,2,3].map(i=> Math.round(preview[i]/total*100));
  radarChart.data.datasets = [{ label:'目前分佈', data: vals, fill:true, tension:0.2, pointRadius:4, backgroundColor:'rgba(11,132,255,0.12)', borderColor:'rgba(11,132,255,0.9)'}];
  radarChart.update();

  // 簡易文字預覽
  const summary = [0,1,2,3].map(i=> `${TYPE_MAP[i]}:${Math.round(preview[i]/total*100)}%`).join('  ');
  const scorePreview = document.getElementById('scorePreview');
  if(scorePreview) scorePreview.textContent = summary;
}

nextBtn.addEventListener('click', ()=>{
  if(answers[current]===null){
    if(!confirm('你尚未選擇此題，確定要繼續（可稍後回來）？')) return;
  }
  if(current < QUESTIONS.length - 1){
    current++; renderQuestion(current);
  } else {
    finishTest();
  }
});

prevBtn.addEventListener('click', ()=>{ if(current>0){ current--; renderQuestion(current); } });

restartBtn.addEventListener('click', ()=>{ if(confirm('重新開始測驗？先前答案將被清除。')) location.reload(); });

function finishTest(){
  // 隱藏題目區
  questionWrap.classList.add('hidden');

  const final = computeScoresFromAnswers(answers);
  const total = Object.values(final).reduce((s,v)=>s+v,0) || 1;
  const perc = [0,1,2,3].map(i=> Math.round(final[i]/total*100));

  // 判定多重最高（支援並列）
  const maxVal = Math.max(...Object.values(final));
  const topIndexes = Object.entries(final).filter(([k,v])=>v === maxVal).map(([k])=>Number(k));
  const topTypes = topIndexes.map(i=> TYPE_MAP[i]);

  // 建構 datasets：主分佈 + 強調線（針對並列或主/次）
  const baseDataset = { label:'分佈', data: perc, fill:true, tension:0.2, pointRadius:4, backgroundColor:'rgba(11,132,255,0.12)', borderColor:'rgba(11,132,255,0.9)' };
  const borderColors = ['rgba(6,182,212,1)','rgba(96,165,250,1)','rgba(252,211,77,1)','rgba(236,72,153,1)'];

  let datasets = [baseDataset];

  if(topIndexes.length > 1){
    // 多重並列：為每個並列加一條虛線強調（同樣的 data，但不同的外框顏色）
    topIndexes.forEach((ti,idx)=>{
      datasets.push({
        label: `${TYPE_MAP[ti]}（並列最高）`,
        data: perc,
        fill:false,
        borderColor: borderColors[ti],
        borderWidth:2,
        borderDash:[6,4]
      });
    });
  } else {
    // 單一最高：找第二高，並分別標注主導與次要線
    const entries = Object.entries(final).map(([k,v])=>[Number(k),v]).sort((a,b)=>b[1]-a[1]);
    const mainIdx = entries[0][0];
    const secondIdx = entries[1] ? entries[1][0] : null;

    datasets.push({
      label: `${TYPE_MAP[mainIdx]}（主導）`,
      data: perc,
      fill:false,
      borderColor: borderColors[mainIdx],
      borderWidth:2
    });
    if(secondIdx !== null){
      datasets.push({
        label: `${TYPE_MAP[secondIdx]}（次要）`,
        data: perc,
        fill:false,
        borderColor: borderColors[secondIdx],
        borderWidth:2,
        borderDash:[4,4]
      });
    }
  }

  radarChart.data.datasets = datasets;
  radarChart.update();

  // 文字結果與完整解析（多結果顯示）
  const percText = [0,1,2,3].map(i => `${TYPE_MAP[i]} ${Math.round(final[i]/total*100)}%`).join(' ｜ ');
  typePerc.textContent = `得分：${percText}`;

  if(topIndexes.length > 1){
    typeTitle.textContent = `${topTypes.join(' / ')} — 並列混合型`;
  } else {
    typeTitle.textContent = `${topTypes[0]} 型（主導）`;
  }

  // 構建完整解析文字
  let analysis = '';
  analysis += `你的四大向度（題數）：\n`;
  [0,1,2,3].forEach(i => analysis += `${TYPE_MAP[i]}：${final[i]} 題\n`);
  analysis += `\n解析：\n\n`;

  if(topIndexes.length > 1){
    topTypes.forEach(t => {
      analysis += `== ${t} 型（並列） ==\n${ANALYSES[t]}\n\n`;
    });
    analysis += `合成建議：\n1) 接受你同時擁有的特質，找出兩者互補的情境。\n2) 制定小步驟，在可能衝突的場合加入檢查點（例如: 衝勁 vs. 謹慎）。\n`;
  } else {
    const entries = Object.entries(final).map(([k,v])=>[Number(k),v]).sort((a,b)=>b[1]-a[1]);
    const main = TYPE_MAP[entries[0][0]];
    const second = TYPE_MAP[entries[1][0]];
    analysis += `主導：\n${ANALYSES[main]}\n\n次要：\n${ANALYSES[second]}\n\n合成建議：\n1) 運用 ${main} 的優勢，同時刻意練習 ${second} 的互補技巧。\n2) 每週設一個小練習（例如：若你是馬型，嘗試每週做一次10分鐘不插話的聆聽）。\n`;
  }

  fullAnalysis.textContent = analysis;
  resultPanel.style.display = 'block';
}

// 下載雷達圖 PNG
exportBtn.addEventListener('click', ()=>{
  try{
    const url = radarChart.toBase64Image();
    const a = document.createElement('a');
    a.href = url;
    a.download = 'radar-chart.png';
    a.click();
  }catch(e){
    alert('下載失敗：' + e.message);
  }
});

// 初始 render
renderQuestion(0);
updateProgress();

// 暴露供 debug
window._QUIZ = {QUESTIONS, answers, computeScoresFromAnswers};
