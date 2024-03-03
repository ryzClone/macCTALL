export let Items = JSON.parse(localStorage.getItem('myUsers'));

export const removeItem = (index) => {
    if (index === 'full') {
        localStorage.removeItem('myUsers');
        Items = [];
    } else {
        Items = Items.filter((item, i) => i !== index);
        localStorage.setItem('myUsers', JSON.stringify(Items));
    }
}


export function removeItemById(id) {
    const index = Items.findIndex(item => item.id === id);
    if (index !== -1) {
        Items.splice(index, 1);
    }
    localStorage.setItem('myUsers', JSON.stringify(Items));
    return [...Items]; 
}

export function updateFirstItem(updatedItem , index) {
    Items[index].Quantity = updatedItem.Quantity; 
    localStorage.setItem('myUsers', JSON.stringify(Items));
}
