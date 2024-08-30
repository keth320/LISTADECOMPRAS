document.addEventListener("DOMContentLoaded", () => {
    // Seletores atualizados para refletir as classes e IDs do HTML
    const itemInput = document.getElementById("newItemInput");
    const botaoSalvar = document.getElementById("botao");
    const shoppingList = document.getElementById("shoppingList");

    // Verifica se os elementos foram encontrados
    if (!itemInput || !botaoSalvar || !shoppingList) {
        console.error("Não foi possível encontrar um ou mais elementos.");
        return;
    }

    // Adiciona um evento de clique ao botão de salvar
    botaoSalvar.addEventListener("click", () => {
        // Captura o valor do campo de input
        const itemValue = itemInput.value.trim();
        
        // Verifica se o campo não está vazio
        if (itemValue) {
            // Cria um novo item de lista
            const newItem = document.createElement("li");

            // Cria o checkbox e o label para o novo item
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = itemValue.replace(/\s+/g, '-').toLowerCase(); // Cria um ID único para o checkbox

            const label = document.createElement("label");
            label.htmlFor = checkbox.id;
            label.textContent = itemValue;

            // Cria os ícones de ação
            const actionIcons = document.createElement("div");
            actionIcons.className = "action-icons";
            actionIcons.innerHTML = `
                <button class="edit"><img src="assets/Edição.svg" alt="Editar"></button>
                <button class="delete"><img src="assets/Property1Default.svg" alt="Excluir"></button>
            `;

            // Adiciona o checkbox, o label e os ícones ao novo item
            newItem.appendChild(checkbox);
            newItem.appendChild(label);
            newItem.appendChild(actionIcons);

            // Adiciona o novo item à lista de compras
            shoppingList.appendChild(newItem);

            // Limpa o campo de input
            itemInput.value = "";
        } else {
            console.warn("O campo de input está vazio.");
        }
    });
});
