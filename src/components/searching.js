//import {rules, createComparison } from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
     //const compare = createComparison(
      //  [rules.skipEmptyTargetValues],
      //  [rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)] // правило: ищем по трём полям
    //);

    return (query, state, action) => { // result заменили на query
    return state[searchField] ? Object.assign({}, query, { // проверяем, что в поле поиска было что-то введено
        search: state[searchField] // устанавливаем в query параметр
    }) : query; // если поле с поиском пустое, просто возвращаем query без изменений
}
}
   // return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
      //     if (action && action.name === 'clear') {
        //    const button = action.target;
          //  const field = button.dataset.field; 

         //   const input = button.parentElement.querySelector(`[data-field="${field}"]`);
          //  if (input) {
           //     input.value = '';
           //     state[field] = ''; 
           // }

        //  Применяем компаратор к данным
       // return data.filter(row => compare(row, state));
   // }
