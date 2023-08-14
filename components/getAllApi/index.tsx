export default async function GetApi() {
  const response = await fetch("https://api.github.com/repos/olliso17/task_go");
  const task = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log(task);
  return (
    <div>
      <p>{task.name}</p>
      <p>{task.full_name}</p>
      <a href={task.url}>{task.url}</a>
    </div>
  );
}
