
const setTagAsDone = async (event, element, id) => {
  event.preventDefault()
  try {
    let response = await fetch(`/tasks/${id}?_method=put`, {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task: { done: element.checked } }),
      method: 'PUT'
    })
    let data = await response.json()
    let task = data.task

    if (task.done) {
      element.checked = true
      element.parentNode.classList.add('has-text-success')
      element.parentNode.classList.add('is-italic')
    } else {
      element.checked = false
      element.parentNode.classList.remove('has-text-success')
      element.parentNode.classList.remove('is-italic')
    }
  } catch (error) {
    console.log(error)
    alert('Erro ao atualizar a tarefa!')
  }
}
