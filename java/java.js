document.addEventListener('DOMContentLoaded', () => {
    const bmiForm = document.getElementById('bmiForm');
    const resultSection = document.getElementById('result');
    const resultArticles = [
        document.getElementById('resultArticle1'),
        document.getElementById('resultArticle2'),
        document.getElementById('resultArticle3')
    ];
    const generalInformations = [
        document.getElementById('generalInformation1'),
        document.getElementById('generalInformation2'),
        document.getElementById('generalInformation3')
    ];
    const bmiValueElement = document.getElementById('bmiValue');
    const bmiCategoryElement = document.getElementById('bmiCategory');

    bmiForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const weight = parseFloat(document.getElementById('input-berat-badan').value);
        const height = parseFloat(document.getElementById('input-tinggi-badan').value) / 100;
        
        if (isNaN(weight) || isNaN(height) || height === 0) {
            alert('Masukkan nilai yang valid untuk berat dan tinggi badan.');
            return;
        }

        const bmi = weight / (height * height);
        let category = '';
        let index = -1;

        if (bmi < 18.50) {
            category = 'Kekurangan berat badan';
            index = 0;
        } else if (bmi >= 18.50 && bmi <= 24.99) {
            category = 'Normal (ideal)';
            index = 1;
        } else if (bmi >= 25 && bmi <= 29.99) {
            category = 'Kelebihan berat badan';
            index = 2;
        } else {
            category = 'Kegemukan (Obesitas)';
            index = 2;
        }

        resultArticles.forEach((article, idx) => {
            article.style.display = idx === index ? 'block' : 'none';
        });

        generalInformations.forEach((info, idx) => {
            info.style.display = idx === index ? 'block' : 'none';
        });

        bmiValueElement.textContent = bmi.toFixed(2);
        bmiCategoryElement.textContent = category;

        resultSection.style.display = 'block';
    });
});
