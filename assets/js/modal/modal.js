// Get the modal
const modal = document.querySelector("#myModal");
const text = modal.querySelector('.modal-text');
const closeBtn = modal.querySelector(".close");
const no = modal.querySelector('.modal-button.nao');
const yes = modal.querySelector('.modal-button.sim');

export function activeModal(message, confirmCallback, cancelCallback) {

	if (!confirmCallback) {
		throw new Error("É necessário passar uma função callback para o caso de resposta positiva");
	}
	
	// Mensagem do modal
	text.textContent = message;

	// Fazendo o modal aparecer
	modal.classList.remove("invisivel");

	// Função para fechar o modal e remover os EventListeners
	const closeModal = () => {
		modal.classList.add("invisivel");
		yes.removeEventListener("click", onConfirm);
		no.removeEventListener("click", onCancel);
		closeBtn.removeEventListener("click", onCancel);
	};

	// Handler para o botão SIM
	const onConfirm = () => {
		confirmCallback();
		closeModal();
	};

	// Handler para o botão NÃO e o ícone de fechar
	const onCancel = () => {
		if (cancelCallback) cancelCallback();
		closeModal();
	};

	// Adicionando EventListeners
	yes.addEventListener("click", onConfirm);
	no.addEventListener("click", onCancel);
	closeBtn.addEventListener("click", onCancel);
}