<h1 >toDo</h1>
<ul>Приложение разбито на следующие компоненты:
<li>Task - одна задача</li>
<li>TaskList - список задач</li>
<li>NewTaskForm - форма для добавления</li>
<li>Footer - футер с информацией и кнопками</li>
<li>TasksFilter - фильтры в футере</li>
</ul>
<div>Для отображения времени создания задачи используется функция <a href="https://date-fns.org/v2.13.0/docs/formatDistanceToNow">библиотеки date-fns </a> </div>
<div>
<h2>Реализовано:</h2>
<li> Добавление задач</li>
<li>Логика фильтрации (Если выбран таб All, то отображаются все задачи.
Если выбран таб Active, то отображаются лишь незавершенные задачи
Если выбран таб Completed, то отображаются лишь завершенные задачи)</li>
<li>Редактирование задач</li>
<li> Удаление задач (возможно удаление всех Completed задач нажатием на кнопку "Clear completed", которая расположена в нижней части списка задач с правой стороны.)</li>
<li> Счетчик незавершенных задач (показывает общее количество незавершенных задач независимо от того, что отображается на экране пользователя и какой таб выбран.)</li>
 </div>
