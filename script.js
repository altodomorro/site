
        const tabs = document.querySelectorAll('.nav a');
        const contents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));
                
                this.classList.add('active');
                const activeTab = this.getAttribute('data-tab');
                document.getElementById(activeTab).classList.add('active');
            });
        });

        document.getElementById('registrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('successMessage').style.display = 'block';
            this.reset();
        });
    