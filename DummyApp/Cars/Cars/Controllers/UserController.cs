using Cars.Data;
using Cars.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cars.Controllers
{
    public class UserController : Controller
    {
        private readonly AppDbContext _db;

        public UserController(AppDbContext db)
        {
            _db = db;
        }

        public IActionResult Index()
        {
            IEnumerable<User> userList = _db.User;
            return View(userList);
        }

        // Get - form
        public IActionResult Create()
        {
            return View();
        }

        // Post - create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(User user)
        {
            _db.User.Add(user);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }

        // Get - form
        public IActionResult Edit(int? id)
        {
            if (id == null || id <= 0)
            {
                return BadRequest();
            }

            var user = _db.User.Find(id);

            if (user == null)
            {
                return NotFound();
            }

            return View(user);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(User user)
        {
            if (ModelState.IsValid)
            {
                _db.User.Update(user);
                _db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(user);
        }

        public IActionResult Delete(int id)
        {
            if (id == null || id <= 0)
            {
                return BadRequest();
            }

            var user = _db.User.Find(id);

            if (user == null)
            {
                return NotFound();
            }

            _db.User.Remove(user);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
