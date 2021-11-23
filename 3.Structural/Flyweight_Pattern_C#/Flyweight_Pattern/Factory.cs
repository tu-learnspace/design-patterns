using System;
using System.Collections.Generic;
using System.Text;

namespace Flyweight_Pattern
{
    public class DrinkFactory
    {
        private Dictionary<string, IDrinkFlyWeight> _drinkCache = new Dictionary<string, IDrinkFlyWeight>();
        public int ObjectsCreated = 0;

        public IDrinkFlyWeight GetDrink(string drinkKey)
        {
            IDrinkFlyWeight drink = null;

            if (_drinkCache.ContainsKey(drinkKey))
            {
                Console.WriteLine("\nReusing existing flyweight object");
                return _drinkCache[drinkKey];

            }
            else
            {
                Console.WriteLine("\n Creating new flyweight object");
                switch (drinkKey)
                {
                    case "Espresso":
                        drink = new Espresso();
                        break;
                    case "BananaSmoothie":
                        drink = new BananSmoothie();
                        break;
                    default:
                        throw new Exception("This is not a flyweight drink object");
                }
            }

            _drinkCache.Add(drinkKey, drink);
            ObjectsCreated++;

            return drink;
        }

        public void ListDrinks()
        {
            Console.WriteLine($"\nFactory has {_drinkCache.Count} drink objects ready to use");
            Console.WriteLine($"Number or objects created: {ObjectsCreated}");

            foreach(var drink in _drinkCache)
            {
                Console.WriteLine($"\t{drink.Value.Name}");
            }
            Console.WriteLine("\n");
        }



        public IDrinkFlyWeight CreateGiveaway()
        {
            return new DrinkGiveaway();
        }
    }
}
