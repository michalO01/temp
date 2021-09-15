using Cars.Data;
using Cars.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cars.Controllers
{
    public class CarController : Controller
    {
        private readonly AppDbContext _db;

        public CarController(AppDbContext db)
        {
            _db = db;
        }

        public IActionResult Index()
        {
            IEnumerable<Car> carsList = _db.Car;
            return View(carsList);
        }

        // Get - form
        public IActionResult Create()
        {
            return View();
        }

        // Post - create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Car car)
        {
            if (ModelState.IsValid)
            {
                _db.Car.Add(car);
                _db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(car);
        }

        // edit

        public IActionResult Edit(int? id)
        {
            if(id == null || id <= 0)
            {
                return BadRequest();
            }

            var car = _db.Car.Find(id);

            if (car == null)
            {
                return NotFound();
            }

            return View(car);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(Car car)
        {
            if (ModelState.IsValid)
            {
                _db.Car.Update(car);
                _db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(car);
        }


        // delete
        public IActionResult Delete(int id)
        {
            var car = _db.Car.Find(id);

            if(car != null)
            {
                _db.Car.Remove(car);
                _db.SaveChanges();
                return RedirectToAction("Index");
            }

            return NotFound();
        }
    }
}
