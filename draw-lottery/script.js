document.getElementById('drawButton').addEventListener('click', function() {
    const optionsText = document.getElementById('options').value.trim();
    const options = optionsText.split('\n').filter(option => option.trim() !== '');

    if (options.length === 0) {
        document.getElementById('result').innerText = '請輸入選項！';
        return;
    }

    const randomIndex = Math.floor(Math.random() * options.length);
    const chosenOption = options[randomIndex];

    document.getElementById('result').innerText = `抽中的選項是：${chosenOption}`;
});
