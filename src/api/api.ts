const BASE_URL = 'http://localhost:3000/api/v1/';

export const subscribe = async (endpoint: string) => {
  let response = await fetch(endpoint);

  if (response.status == 502) {
    // Статус 502 - это таймаут соединения;
    // возможен, когда соединение ожидало слишком долго
    // и сервер (или промежуточный прокси) закрыл его
    // давайте восстановим связь
    await subscribe(endpoint);
  } else if (response.status != 200) {
    // Какая-то ошибка, покажем её
    console.log(response.statusText);
    // Подключимся снова через секунду.
    await new Promise(resolve => setTimeout(resolve, 1000));
    await subscribe(endpoint);
  } else {
    // Получим и покажем сообщение
    let message = await response.text();
    console.log(message);
    // И снова вызовем subscribe() для получения следующего сообщения
    await subscribe(endpoint);
  }
}