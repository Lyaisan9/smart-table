//import {createComparison, defaultRules} from "../lib/compare.js";

// @todo: #4.3 — настроить компаратор
//const compare = createComparison(defaultRules); 

export function initFiltering(elements, indexes) {
    // @todo: #4.1 — заполнить выпадающие списки опциями
    const updateIndexes = (elements, indexes) => {
    Object.keys(indexes).forEach((elementName) => {                       // Получаем ключи из объекта // Перебираем по именам
        elements[elementName].append(                    // в каждый элемент добавляем опции
            ...Object.values(indexes[elementName])        // формируем массив имён, значений опций
                      .map(name => {   
                        const el = document.createElement('option');
                el.textContent = name;
                el.value = name;
                return el;                    // используйте name как значение и текстовое содержимое
                                                        // @todo: создать и вернуть тег опции
                         }))
        })
    }



    const applyFiltering = (query, state, action) => {
   
        // @todo: #4.2 — обработать очистку поля
      if (action && action.name === 'clear') {
            const button = action.target; // кнопка "очистить"
            const field = button.dataset.field; // имя поля фильтра (например, "searchBySeller")
            const input = button.parentElement.querySelector(`[data-field="${field}"]`);

            if (input) {
                input.value = ''; // сбрасываем значение в DOM
                state[field] = ''; // сбрасываем значение в состоянии
            }
        }

         const filter = {};
        Object.keys(elements).forEach(key => {
            if (elements[key]) {
                if (['INPUT', 'SELECT'].includes(elements[key].tagName) && elements[key].value) { // ищем поля ввода в фильтре с непустыми данными
                    filter[`filter[${elements[key].name}]`] = elements[key].value; // чтобы сформировать в query вложенный объект фильтра
                }
            }
        })

        return Object.keys(filter).length ? Object.assign({}, query, filter) : query; // если в фильтре что-то добавилось, применим к запросу
    }

    return {
        updateIndexes,
        applyFiltering
    }
        // @todo: #4.5 — отфильтровать данные используя компаратор
      //  return data.filter(row => compare(row, state));
}