-- init.sql
CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT[],
    video VARCHAR(100)
)

INSERT INTO users (name, description, video) 
("Squats",ARRAY["Stand with your feet slightly wider than shoulder-width apart and your toes pointing ahead.",
"Slowly descend, bending through the hips, knees, and ankles.","Stop when your knees reach a 90-degree angle.",
"Return to the starting position"], "https://youtube.com/shorts/PPmvh7gBTi0?si=9cbz24PivTd3eFVd"),
("Deadlifts",ARRAY["Starting Position", "Initiate the Lift", "Lift the Barbell", "Reach Full Extension", "Lower the Barbell", 
"Return to Starting Position"],"https://youtube.com/shorts/vfKwjT5-86k?si=eAneWXg0H-3isHlk")