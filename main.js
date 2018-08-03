/*С помощью декоратора, мы можем динамически добавлять обьектам новые свойства и методы.
    То есть мы как бы заворачиваем наш обьект в декоратор, как в superclass.*/

class Coffee {
  cost () {
    return 5
  }
}

const sugar = coffee => {
  const cost = coffee.cost();
  coffee.cost = () => cost + 1
};

const small = coffee => {
  const cost = coffee.cost();
  coffee.cost = () => cost - 1
};


const coffee = new Coffee();
sugar(coffee);
small(coffee);


console.log(coffee.cost());