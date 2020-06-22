exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert([
    {
      VIN: 154498463,
      make: "Nissan",
      model: "Versa",
      mileage: 81273,
      transmission: "Manual",
      title: "clean",
    },
    {
      VIN: 579516857,
      make: "Ford",
      model: "Fiesta",
      mileage: 67812,
      transmission: "Automatic",
    },
  ]);
};
