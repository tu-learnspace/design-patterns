using System;
using System.Collections.Generic;
using System.Text;

namespace Flyweight_Pattern
{
    public interface IDrinkFlyWeight
    {
        // intrinsic state
        string Name { get; }
        // extrinsic
        void Serve(string size);
    }


    public class Espresso: IDrinkFlyWeight
    {
        private string _name;
        public string Name { get { return _name; } }

        private IEnumerable<string> _ingredients;

        public Espresso()
        {
            _name = "Espresso";
            _ingredients = new List<string>()
            {
                "Coffee Beans",
                "Hot Water"
            };
        }
        public void Serve(string size)
        {
            Console.WriteLine($"- {size} {_name} with {string.Join(", ", _ingredients)} coming up!");
        }
    }

    public class BananSmoothie : IDrinkFlyWeight
    {
        private string _name;
        public string Name { get { return _name; } }

        private IEnumerable<string> _ingredients;

        public BananSmoothie()
        {
            _name = "Banana Smoothie";
            _ingredients = new List<string>()
            {
                "Banana",
                "Whole Milk",
                "Vanilla Extract"
            };
        }

        public void Serve(string size)
        {
            Console.WriteLine($"- {size} {_name} with {string.Join(", ", _ingredients)} coming up!");
        }
    }


    // unshared concrete flyweight
    public class DrinkGiveaway : IDrinkFlyWeight
    {
        // all state
        public string Name { get { return _randomDrink.Name; } }
        private IDrinkFlyWeight[] _eligibleDrinks = new IDrinkFlyWeight[]
        {
                new Espresso(),
                new BananSmoothie()
        };
        private IDrinkFlyWeight _randomDrink;
        private string _size; // vi intrinsic ko dc share nen ta co the luu lai size

        public DrinkGiveaway()
        {
            var randomIndex = new Random().Next(0, 2);
            _randomDrink = _eligibleDrinks[randomIndex];
        }


        // extrinsic state
        public void Serve(string size)
        {
            _size = size;
            Console.WriteLine($"Free Giveaway");
            Console.WriteLine($"- {size} {_randomDrink.Name} coming up!");
        }
    }
}
