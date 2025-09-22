// fill current year
document.getElementById('year').textContent = new Date().getFullYear();

// simple scroll helper
function scrollToProjects() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}

// contact form (client-side only)
function sendMessage(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email) {
        alert('من فضلك املأ الاسم والبريد.');
        return;
    }
    // By default open mail client with prefilled content. Replace with real backend as needed.
    const mailto = `mailto:Mahmoudatef15796@gmail.com?subject=${encodeURIComponent(subject || 'رسالة من موقع')}%20-%20${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\n' + 'البريد: ' + email)}`;
    window.location.href = mailto;
}

// Modal: project data (edit these entries to match مشاريعك)
const projects = [
    { title: 'فيلا العائلة — الساحل', img: 'https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=60', desc: 'وصف مختصر للمشروع: تصميم فيلا عائلية يركّز على افتحالات طبيعية ومساحات معيشة مرنة.' },
    { title: 'مكتب تصميم — القاهرة الجديدة', img: 'https://images.unsplash.com/photo-1505691723518-36a5b3bfe6a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=60', desc: 'مكتب معاصر بمساحات عمل مفتوحة واعتماد على إنارة طبيعية.' },
    { title: 'تحويل مبنى قديم — إعادة استخدام', img: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=60', desc: 'مشروع ترميم وتحويل مبنى قديم لاستخدام مختلط، مع مراعاة الاستدامة.' }
];

function openModal(i) {
    const p = projects[i];
    document.getElementById('modalTitle').textContent = p.title;
    document.getElementById('modalImg').style.backgroundImage = `url(${p.img})`;
    document.getElementById('modalDesc').textContent = p.desc;
    document.getElementById('modal').style.display = 'flex';
}
function closeModal() { document.getElementById('modal').style.display = 'none' }

// keyboard accessibility: close modal with Esc
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal() });

// small progressive enhancement: lazyload images
document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('img');
    imgs.forEach(img => { img.loading = 'lazy' });
});