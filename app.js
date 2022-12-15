const grafos = document.querySelectorAll('.grafo');
const smalls = document.querySelectorAll('small');

grafos.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        smalls[index].classList.toggle('active');
    });
    item.addEventListener('mouseout', () => {
        smalls[index].classList.toggle('active');
    });
});