const { Activity, User } = require("../models");

const getGymCalendar = async (req, res) => {
  let calendar = [
    { day: "lunes", activities: [] },
    { day: "martes", activities: [] },
    { day: "miércoles", activities: [] },
    { day: "jueves", activities: [] },
    { day: "viernes", activities: [] },
    { day: "sábado", activities: [] }
  ];

  const hours = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00"
  ];

  try {
    const activities = await Activity.find().populate("trainer", "name surname");

    calendar.forEach(item => {
      hours.forEach(hour => {
        activities.forEach(activity => {
          if (activity.days.includes(item.day) && activity.schedule.includes(hour)) {
            item.activities.push({
              name: activity.name,
              trainer: `${activity.trainer.name} ${activity.trainer.surname}`,
              hour
            });
          }
        });
      });
    });

    res.json({ calendar });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Server error"
    });
  }
};

module.exports = getGymCalendar;
