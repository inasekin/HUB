export const faqFunction = () => {
    const accordion = document.querySelector('.faq-block__accordion');
    const items = accordion.querySelectorAll('.faq-block__accordion-item');

    items.forEach((item) => {
        const title = item.querySelector('.faq-block__accordion-title');

        title.addEventListener('click', (e) => {
            const opened_item = accordion.querySelector('.is-open');

            // Toggle current item
            toggle_item(item);

            // Close earlier opened item if exists
            if (opened_item && opened_item !== item) {
                toggle_item(opened_item);
            }


        });
    });

    const toggle_item = (item) => {
        const body = item.querySelector('.faq-block__accordion-body');
        const content = item.querySelector('.faq-block__accordion-content');

        if (item.classList.contains('is-open')) {
            body.removeAttribute('style');
            item.classList.remove('is-open');
        } else {
            body.style.height = body.scrollHeight + 'px';
            item.classList.add('is-open');
        }
    }
    let faqLi = document.querySelectorAll(".specialist-block__advice-accordion li .specialist-block__advice-title");
    let faqBtns = document.querySelectorAll(".plus-minus-toggle");

    faqLi.forEach(function (item, i, arr) {
        item.onclick = function () {
            this.parentNode.classList.toggle("active");
            faqBtns[i].classList.toggle("collapsed");
        };
    });
}
