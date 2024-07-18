document.addEventListener('DOMContentLoaded', () => {
    const bmiForm = document.getElementById('bmiForm');
    const resultSection = document.getElementById('result');
    const resultArticle1 = document.getElementById('resultArticle2');
    const generalInformation1 = document.getElementById('generalInformation2');
    const resultArticle2 = document.getElementById('resultArticle1');
    const generalInformation2 = document.getElementById('generalInformation1');
    const resultArticle3 = document.getElementById('resultArticle');
    const generalInformation3 = document.getElementById('generalInformation');
    const bmiValueElement = document.getElementById('bmiValue');
    const footer = document.getElementById('footer');
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

        if (bmi < 18.50) {
            category = 'Kekurangan berat badan';
            resultArticle1.style.display = 'block';
            generalInformation1.style.display = 'block';
        } else if (bmi >= 18.50 && bmi <= 24.99) {
            category = 'Normal (ideal)';
            resultArticle2.style.display = 'block';
            generalInformation2.style.display = 'block';
        } else if (bmi >= 25 && bmi <= 29.99) {
            category = 'Kelebihan berat badan';
            resultArticle3.style.display = 'block';
            generalInformation3.style.display = 'block';
        } else {
            category = 'Kegemukan (Obesitas)';
            resultArticle3.style.display = 'block';
            generalInformation3.style.display = 'block';
        }

        bmiValueElement.textContent = bmi.toFixed(2);
        bmiCategoryElement.textContent = category;

        resultSection.style.display = 'block';
        footer.style.display = 'block';
    });
});
