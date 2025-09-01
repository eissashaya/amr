 const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // التحقق من التفضيل المحفوظ
    if (localStorage.getItem('theme') === 'light') {
      body.classList.add('light-mode');
    }
    
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      
      // حفظ التفضيل
      if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
      } else {
        localStorage.setItem('theme', 'dark');
      }
    });
    
    // القائمة المنسدلة للجوال
    const hamburger = document.getElementById('hamburger');
    const navigation = document.getElementById('navigation');
    
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navigation.classList.toggle('active');
    });
    
    // إغلاق القائمة عند النقر على رابط
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navigation.classList.remove('active');
      });
    });