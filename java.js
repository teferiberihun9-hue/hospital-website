

document.addEventListener('DOMContentLoaded', function() {

    const explanationDetails = {
        "5 Ways to Boost Immunity": 
            <div style="background:#e6f7ff; padding:15px; border-left:5px solid #2c7da0; border-radius:8px; margin-top:10px;">
                <strong>Immunity Tips:</strong> Eat citrus fruits, sleep 8 hours, and reduce stress.
            </div>,
        "Heart Health Month": 
            <div style="background:#ffe6e6; padding:15px; border-left:5px solid #e63946; border-radius:8px; margin-top:10px;">
                <strong>Heart Care:</strong> Free BP screenings all March at Mizan Teppi Hospital.
            </div>,
        "Vaccination Drive": 
            <div style="background:#f0fff0; padding:15px; border-left:5px solid #2ecc71; border-radius:8px; margin-top:10px;">
                <strong>Vaccines:</strong> Free childhood immunizations every Wednesday.
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
                div.innerHTML = explanationDetails[title] || "Coming soon...";
                parent.appendChild(div);
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
