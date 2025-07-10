function addItem(type) {
    const input = document.getElementById(`${type}-input`);
    const value = input.value.trim();
    if (value === '') return;

    const list = document.getElementById(`${type}-list`);
    const item = document.createElement('div');
    item.className = 'bg-gray-700 text-white px-3 py-1 rounded-full flex items-center gap-2';
    item.innerHTML = `
      <span>${value}</span>
      <button onclick="this.parentElement.remove()" class="text-red-400 hover:text-red-600">✖</button>
    `;
    list.classList.add('p-4')
    list.classList.add('my-4')
    list.appendChild(item);
    input.value = '';
}