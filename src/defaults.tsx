import React from 'react';

import { JupyterFrontEnd } from '@jupyterlab/application';
import { INotebookTracker } from '@jupyterlab/notebook';

import { COURSE_TOUR_ID } from './constants';
import { ITourManager } from './tokens';

/**
 * Add custom Python course tour (Russian)
 */
function addCourseTour(manager: ITourManager): void {
  const courseTour = manager.createTour({
    id: COURSE_TOUR_ID,
    label: 'Введение в курс Python',
    hasHelpEntry: true,
    version: 20240216
  });

  courseTour.options = {
    ...courseTour.options,
    hideBackButton: true
  };

  courseTour.addStep({
    target: '#jp-main-dock-panel',
    content: (
      <>
        <p><strong>Добро пожаловать в курс Python для дата-инженеров!</strong></p>
        <p>Этот короткий тур покажет основные элементы интерфейса.</p>
      </>
    ),
    placement: 'center',
    title: 'Добро пожаловать!'
  });

  courseTour.addStep({
    target: '.jp-NotebookPanel-toolbar',
    content: (
      <>
        <p>Панель инструментов для работы с ноутбуком:</p>
        <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
          <li><strong>▶</strong> — выполнить ячейку</li>
          <li><strong>■</strong> — остановить выполнение</li>
          <li><strong>↻</strong> — перезапустить ядро</li>
        </ul>
      </>
    ),
    placement: 'bottom',
    title: 'Панель инструментов'
  });

  courseTour.addStep({
    target: '.jp-Cell.jp-Notebook-cell',
    content: (
      <>
        <p>Это <strong>ячейка кода</strong>.</p>
        <p>Нажмите <kbd>Shift</kbd>+<kbd>Enter</kbd> чтобы выполнить код и перейти к следующей ячейке.</p>
        <p><small>Или <kbd>Ctrl</kbd>+<kbd>Enter</kbd> чтобы выполнить и остаться на месте.</small></p>
      </>
    ),
    placement: 'bottom',
    title: 'Ячейка кода'
  });

  courseTour.addStep({
    target: '#jp-MainMenu',
    content: (
      <>
        <p>В меню <strong>Просмотр → Оглавление</strong> можно открыть навигацию по разделам урока.</p>
        <p><small>Также там есть полезные настройки отображения.</small></p>
      </>
    ),
    placement: 'bottom',
    title: 'Меню'
  });

  courseTour.addStep({
    target: '#jp-main-dock-panel',
    content: (
      <>
        <p>Теперь вы готовы начать!</p>
        <p>Изменяйте код, экспериментируйте — это ваша копия ноутбука.</p>
        <p><strong>Удачи в изучении Python!</strong> 🐍</p>
      </>
    ),
    placement: 'center',
    title: 'Готово!'
  });
}

/**
 * Add all default tours
 * (Modified: only adds the custom Python course tour)
 */
export function addTours(
  manager: ITourManager,
  app: JupyterFrontEnd,
  nbTracker?: INotebookTracker
): void {
  // Only add the custom course tour, no default Welcome/Notebook tours
  addCourseTour(manager);
}
