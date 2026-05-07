
document.addEventListener('DOMContentLoaded', function() {
  
    const explanationDetails = {
        "5 Ways to Boost Immunity": 
            <div style="background:#e6f7ff; padding:15px; border-left:5px solid #2c7da0; border-radius:8px; margin-top:10px;">
                <strong>Immunity Tips:</strong> Eat citrus fruits (oranges, mangoes), sleep 7–9 hours, manage stress, stay hydrated, and try traditional boosters like ginger, garlic, honey, and Tenadam (rue). Visit our nutrition clinic every Tue & Thu.
            </div>
        ,
        "Heart Health Month": 
            <div style="background:#ffe6e6; padding:15px; border-left:5px solid #e63946; border-radius:8px; margin-top:10px;">
                <strong>Heart Care:</strong> Free BP & cholesterol screenings every Monday in March. 50% off ECG on Wednesdays. Heart Walk on March 20th at 8 AM. Call +251-47-441-1234 ext. 210 to book.
            </div>
        ,
        "Vaccination Drive": 
            <div style="background:#f0fff0; padding:15px; border-left:5px solid #2ecc71; border-radius:8px; margin-top:10px;">
                <strong> Vaccines:</strong> Free childhood immunizations (measles, polio, BCG) every Wednesday, 8 AM – 4 PM. Adults: COVID‑19 booster, flu shot, tetanus (small fee). Bring your immunization card.
            </div>
        
    };

    const buttons = document.querySelectorAll('.read-more');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();


            const parent = button.parentElement;
            const title = parent.querySelector('h3').innerText.trim();

            let existingDiv = parent.querySelector('.blog-explanations');

            if (!existingDiv) {
           
                const div = document.createElement('div');
                div.className = 'blog-explanations';
                div.style.display = 'none';   
                div.innerHTML = explanationDetails[title] || "<em>More information coming soon. Contact the hospital directly.</em>";
                parent.appendChild(div);
  
                div.style.display = 'block';
                button.textContent = 'Read less';
            } else {
     
                if (existingDiv.style.display === 'none') {
                    existingDiv.style.display = 'block';
                    button.textContent = 'Read less';
                } else {
                    existingDiv.style.display = 'none';
                    button.textContent = 'Read more';
                }
            }
        });
    });
});


