/* ---------- 題目資料：已更新為你提供的版本 ---------- */
const questions = [
    {
        q: "1. 當你遇到一個新的挑戰或任務時，你的第一反應是？",
        options: {
            A: "馬上跳進去、先試看看",
            B: "先觀察環境、研究方式",
            C: "有點猶豫、怕搞砸、先做部分準備",
            D: "想幫助他人、在背後支撐或配合"
        }
    },
    {
        q: "2. 在人際互動中，當朋友需要幫忙或情緒低落時，你通常會：",
        options: {
            A: "鼓勵他們「快起來、一起去做點什麼」",
            B: "安靜陪伴、傾聽他們說出來",
            C: "有點退縮、不太確定怎麼幫比較好",
            D: "主動提供支持、做好後勤或照顧他們"
        }
    },
    {
        q: "3. 當你在思考人生或尋找方向時，你偏好哪種方式：",
        options: {
            A: "設定目標、立刻動手實踐",
            B: "深入思考、寫筆記、分析可能性",
            C: "小心翼翼、怕錯、慢慢走",
            D: "和他人分享、互相支持、一步一腳印"
        }
    },
    {
        q: "4. 面對失敗或挫折，你最可能的反應是：",
        options: {
            A: "立刻反彈、再戰一次",
            B: "自我反省、思考教訓",
            C: "感到沮喪、有點退縮、怕再犯錯",
            D: "尋求或提供人際支持、共同面對"
        }
    },
    {
        q: "5. 如果要選擇你最看重的特質，是哪一項？",
        options: {
            A: "冒險精神 / 行動力",
            B: "思考深度 / 內在探索",
            C: "謹慎 / 安全感",
            D: "溫暖 / 支持他人"
        }
    }
];

/* ---------- 完整解析：已替換成你提供的全文 ---------- */
const analysisText = {
    B: `
<h3>【男孩型】</h3>
<p>關於自己，你還在學著怎麼相信。</p>
<p><b>你的樣子</b><br>
你有很強的感受力，對世界充滿好奇，也對自己充滿好奇，也對自己充滿問號。你常常會想：「我到底夠不夠好？」、「我能不能被喜歡、被理解？」這種敏感，讓你更容易看見別人的情緒，也更容易忽略自己的需要。</p>
<p><b>你給別人的感覺</b><br>
在別人眼中，你像一個正在長大的孩子，真誠、直接、很真實。你會為了關係不斷自我檢討，只想讓自己變得更好。很多人因為你願意說出的脆弱，而覺得被陪伴。</p>
<p><b>給你的提醒</b><br>
你不需要完美才值得被愛。試著多看看自己已經做得不錯的地方，允許「還在路上」的自己存在。當你願意對自己溫柔一點，你就會發現：原來你早就已經是某個人心裡，很重要的那個存在。</p>
    `,

    D: `
<h3>【鼴鼠型】</h3>
<p>你的溫柔，是世界很需要的溫柔。</p>
<p><b>你的樣子</b><br>
你很重視「舒服感」——食物、氣氛、陪伴、小確幸。你知道人不可能每天都很強，所以你特別會照顧情緒、照顧氣氛。你會為別人準備點心、傳訊息問候、講些好笑的話，讓沈重變得沒那麼可怕。</p>
<p><b>你給人的感覺</b><br>
你像一個會做甜點的好朋友，可能不會給一大串理性分析，但總會讓人覺得：「跟你在一起就不那麼難過了吧。」很多人其實靠你的存在，才撐過了一些很黑暗的日子。</p>
<p><b>給你的提醒</b><br>
在照顧別人之前，也別忘了一句：「那我自己呢？」你值得把同樣的溫柔，留一份給自己。偶爾不用那麼逗趣、那麼體貼，也沒關係——就算今天只想躺著，你一樣是很可愛的你。</p>
    `,

    C: `
<h3>【狐狸型】</h3>
<p>你看得很清楚，只是習慣把心收好。</p>
<p><b>你的樣子</b><br>
你敏銳、細心，對人的真心假意、情況的危險程度，有一種直覺式的判斷。你不會輕易把自己交出去，因為你知道受傷有多痛，所以寧可慢一點、再確定一點。</p>
<p><b>你給人的感覺</b><br>
一開始，你可能讓人覺得有距離、有點冷，但真正走進你心裡的人都知道：你其實非常忠誠、非常有義氣。你不會亂承諾，一旦說出口，就會盡力做到。</p>
<p><b>給你的提醒</b><br>
保持界線是好事，但也別把自己關得太緊。不是每個人都會像過去那些人一樣傷害你。你可以試著多給世界一點點機會——不是為了別人，而是為了讓自己有機會好好被對待。</p>
    `,

    A: `
<h3>【馬型】</h3>
<p>你習慣當那個「載大家走過去」的人。</p>
<p><b>你的樣子</b><br>
你很習慣扛責任、撐住場面。很多時候，你自己其實也會累、也會徬徨，可是你會先問：「大家還好嗎？」你是那種會陪著別人走一段的人，願意當那匹穩穩向前的馬。</p>
<p><b>你給人的感覺</b><br>
你讓人有安全感。只要你在，事情好像就能慢慢被處理好。很多人會在不知不覺中依賴你、把難題丟給你，因為你看起來總是知道該怎麼做。</p>
<p><b>給你的提醒</b><br>
你不是永遠都要那麼堅強。當你覺得很重的時候，也可以停下來，把一些重量放回去，或者請別人幫忙扛一點。有時候，真正的力量不是一直往前衝，而是敢在需要的時候說：「我也想被照顧。」</p>
    `
};

/* ---------- 狀態 ---------- */
let current = 0;
let counts = { A: 0, B: 0, C: 0, D: 0 };
let selected = null;
let chart;

/* ---------- 初始化 ---------- */
window.onload = () => loadQuestion();

/* ---------- 題目渲染 ---------- */
function loadQuestion() {
    const area = document.getElementById("quiz-area");

    if (current >= questions.length) return showResult();

    const q = questions[current];

    area.innerHTML = `
        <div class="card">
            <h3>${q.q}</h3>
            ${Object.keys(q.options)
                .map(letter => 
                    `<button class="option-btn" onclick="selectOption('${letter}')">
                        ${letter}. ${q.options[letter]}
                    </button>`
                )
                .join("")}

            <button onclick="nextQuestion()">
                ${current === questions.length - 1 ? "完成並看結果" : "下一題"}
            </button>
        </div>
    `;

    updateProgress();
}

/* ---------- 選擇答案 ---------- */
function selectOption(letter) {
    selected = letter;
}

/* ---------- 下一題 ---------- */
function nextQuestion() {
    if (!selected) {
        alert("請先選擇一個答案！");
        return;
    }

    counts[selected]++;
    selected = null;
    current++;

    loadQuestion();
}

/* ---------- 進度條 ---------- */
function updateProgress() {
    document.getElementById("progress-bar").style.width =
        (current / questions.length) * 100 + "%";
}

/* ---------- 顯示結果 ---------- */
function showResult() {
    document.getElementById("quiz-area").style.display = "none";
    document.getElementById("result").style.display = "block";

    let maxScore = Math.max(...Object.values(counts));
    let topTypes = Object.keys(counts).filter(t => counts[t] === maxScore);

    document.getElementById("analysis").innerHTML =
        topTypes.map(t => analysisText[t]).join("<br><br>");

    drawRadar(topTypes);

    document.getElementById("download-btn").onclick = () => {
        const link = document.createElement("a");
        link.download = "測驗結果.png";
        link.href = chart.toBase64Image();
        link.click();
    };
}

/* ---------- 雷達圖：支援多結果高亮 ---------- */
function drawRadar(highlightTypes) {
    const ctx = document.getElementById("radarChart");

    const labels = ["馬(A)", "男孩(B)", "狐狸(C)", "鼴鼠(D)"];
    const dataArr = [counts.A, counts.B, counts.C, counts.D];

    const colors = {
        A: "rgba(255,99,132,0.8)",
        B: "rgba(54,162,235,0.8)",
        C: "rgba(255,206,86,0.8)",
        D: "rgba(75,192,192,0.8)"
    };

    // 多結果 → 多條線
    const datasets = highlightTypes.map(letter => ({
        label: `${letter} 類型`,
        data: dataArr,
        borderColor: colors[letter],
        backgroundColor: colors[letter].replace("0.8", "0.2"),
        borderWidth: 3
    }));

    chart = new Chart(ctx, {
        type: "radar",
        data: { labels, datasets },
        options: {
            scales: {
                r: {
                    suggestedMin: 0,
                    suggestedMax: 5
                }
            }
        }
    });
}

/* ---------- 重新測驗 ---------- */
function restartQuiz() {
    current = 0;
    counts = { A: 0, B: 0, C: 0, D: 0 };
    selected = null;

    document.getElementById("quiz-area").style.display = "block";
    document.getElementById("result").style.display = "none";

    loadQuestion();
    updateProgress();
}
