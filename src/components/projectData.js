import bee from '../images/cropped_bee.png';
import voltaic from '../images/voltaic.png';
import rbe2102 from '../images/rbe2102_romi.png';
import python from '../images/python.svg';
import cpp from '../images/C++.svg';
import java from '../images/java.svg';
import tensorflow from '../images/tensorflow.png';
import ros2 from '../images/ros2.png';
import altium from '../images/altium.png';
import ardupilot from '../images/ardu_logo_dark.png';
import pcl from '../images/pcl.png'
import huron_comp from '../images/huron_comparison.png';
import huron_alone from '../images/huron_alone.png'
import controls_proj from '../images/502.png';
import controls_gif from '../images/quadsim_combined.gif';
import motion_planning_proj from '../images/550_proj3_1.png';
import cube_swarm from '../images/cubeswarm.jpg';
import gesture_recog from '../images/gesture_ds.png';
import ind_robot_arm from '../images/abb_irb1600.png';
import rbe3002 from '../images/rbe3002.png';
import rbe3001 from '../images/rbe3001.png';
import rbe2001 from '../images/rbe2001.png';
import rbe501 from '../images/rbe501_app.png'
import rbe501_cropped from '../images/rbe501_app_cropped.png'
import shapes from '../images/shapes.png';
import sfis from '../images/sfis.png';
import fpv from '../images/fpvdrone.png';
import rc from '../images/3dprccar.png';
import soft_eng from '../images/soft_eng.png';
import matlab from '../images/matlab_logo.gif';
import arduino from '../images/Arduino_Logo.png';
import gazebo from '../images/Gazebo_logo.png';
import pytorch from '../images/PyTorch_logo.png';
import opencv from '../images/OpenCV_logo.png';
import solidworks from '../images/SolidWorks-Logo.jpg';
import solidworks_cube from '../images/solidworks_cube.png';
import ros from '../images/Ros_logo.png';
import docker from '../images/docker.svg';
import docker_words from '../images/docker_logo_words.png';
import betaflight from '../images/betaflight.png';
import drone_lineage from '../images/Drone_lineage.JPG';
import fusion_logo from '../images/fusion_logo.png'
import scene_builder from '../images/scene_builder_logo.png';
import blender from '../images/blender_logo.png';

const projects = [
  { 
    id: 1, 
    image: bee, 
    title: 'Audio Depth', 
    description: 'Researching the use of ultrasonic sensors for obstalce avoidance on nano-drone.',
    summary: "Many modern perception techniques such as stereo vision and LiDAR are not sufficient for many search and rescure environments. The project aims to utilize ultrasound sensors and deep learning to for autonomous drone navigation. ", 
    date: 'May 2024 - Present', 
    resources: [python, tensorflow, cpp, ros2, altium, solidworks_cube],
    tags: ['Graduate', 'Research', 'Robotics', 'Drones', 'Electronics', 'Machine Learning', 'Perception', 'Team', 'Algorithms', 'Optimization'] 
  },
  { 
    id: 2, 
    image: drone_lineage, 
    title: 'Micro Bee Demo', 
    description: 'Maintaining demo of ultrasound work for lab tours.', 
    summary: " ",
    date: 'Jul & Nov 2024', 
    resources: [ardupilot], 
    tags: ['Graduate', 'Robotics', 'Drones', 'Electronics', 'Ardupilot', 'Perception', 'Team']
  },
  { 
    id: 3, 
    image: motion_planning_proj, 
    title: 'Various Motion Planning Projects', 
    description: 'Mini projects using C++ and the Open Motion Planning Libarary.',
    summary: " As part of my Motion Planning Course, we have partaken completed 4 mini projects throughout the course using C++ and the Open Motion Planning Library, and visualization with Python and Matplotlib. The projects include developing a Random Tree Planner, path planning for a mobile agent with a robot arm to reach into a narrow gap while maximizing clearance to obstacles,and implementing a kinodynamic planner for an agent with differential drive and a car.", 
    date: 'Aug 2024 - Present', 
    resources: [cpp, docker_words], 
    tags: ['Graduate', 'Robotics', 'Motion Planning', 'Algorithms', 'Team'],  
  },
  { 
    id: 4, 
    image: controls_gif, 
    title: 'Drone Control', 
    description: 'Implementation of PID and MPC controllers for a drone', 
    summary: " ",
    date: 'Oct 2024 - Present', 
    resources: [matlab],
    tags: ['Graduate', 'Robotics', 'Controls', 'Drones'] 
  },
  { 
    id: 5, 
    image: huron_alone, 
    title: 'HURON', 
    description: 'Redesign of Humanoid Robot', 
    summary: " ",
    date: 'May 2024 - July 2024', 
    resources: [solidworks_cube],
    tags: ['Graduate', 'Robotics', 'CAD', 'Mechanical Design', 'SolidWorks'] 
  },
  { 
    id: 6, 
    image: voltaic, 
    title: '3lb Combat Robot: Voltaic', 
    description: 'Description of project one.', 
    summary: " ",
    date: 'Jan 2023 - Present', 
    resources: [solidworks_cube, fusion_logo], 
    tags: ['Undergraduate', 'Robotics', 'CAD', 'Mechanical Design', 'SolidWorks', "Electronics", "3D Printing", "CAM", "Fusion 360", "Machining"] 
  },
  { 
    id: 7, 
    image: rbe501_cropped, 
    title: 'Dynamics Arm Simulator', 
    description: 'MATLAB App simulating robot arm dynamics with RNE',
    summary: " ", 
    date: 'April 2024 - May 2024', 
    resources: [matlab],
    tags: ['Graduate', 'Robotics', 'Dynamics', 'Algorithms', 'Team', 'Kinematics'] 
  },
  { 
    id: 8, 
    image: gesture_recog, 
    title: 'Gesture Recognition', 
    description: 'A comparison of CNN based networks vs Vision Transformers', 
    summary: " ",
    date: 'Mar 2024 - May 2024', 
    resources: [python, pytorch, opencv],
    tags: ['Graduate', 'Machine Learning', 'Perception', 'Team'] 
  },
  { 
    id: 9, 
    image: rbe3002, 
    title: 'SLAM in Static Environment', 
    description: 'ROS implementation of SLAM with Turtlebot', 
    summary: " ",
    summary: " ",
    date: 'Oct 2023 - Dec 2023', 
    resources: [python, ros, gazebo],
    tags: ['Undergraduate', 'Robotics', 'Perception', 'Localization', 'Motion Planning','Algorithms', 'AI', 'Kinematics'] 
  },
  { 
    id: 10, 
    image: cube_swarm, 
    title: 'Cube Swarm', 
    description: 'Manufacturing and deployment of cube robots', 
    summary: " ",
    date: 'Aug 2023 - May 2023', 
    resources: [solidworks_cube, python],
    tags: ['Undergraduate', 'Robotics', 'Swarm', 'AI', 'Perception', '3D Printing', 'SolidWorks', 'Kinematics', 'Team', 'Electronics'] 
  },
  { 
    id: 11, 
    image: shapes, 
    title: 'Fitting Shape Primitives', 
    description: 'Fitting shape primitives to simulated point cloud data.', 
    summary: " ",
    date: 'Oct 2023 - Dec 2023', 
    resources: [python, ros2, gazebo, pcl],
    tags: ['Undergraduate', 'Perception', 'Algorithms', 'AI', 'Team'] 
  },
  { 
    id: 12, 
    image: ind_robot_arm, 
    title: 'Industrial Robot Pick and Place', 
    description: 'Pick and Place operation using ABB IRB1600 and Cognex Camera', 
    summary: " ",
    date: 'Mar 2023 - May 2023', 
    resources: [], // robot studio
    tags: ['Undergraduate', 'Robotics', 'Algorithms', 'Team'] 
  },
  { 
    id: 13, 
    image: rbe3001, 
    title: 'RBE3001 Pick and Place', 
    description: 'Pick and Place operation using ABB IRB1600 and Cognex Camera', 
    summary: " ",
    date: 'Jan 2023 - Man 2023', 
    resources: [matlab],
    tags: ['Undergraduate', 'Robotics', 'Perception', 'Kinematics', 'AI', 'Team'] 
  },
  { 
    id: 14, 
    image: sfis, 
    title: 'IQP: Makerspace for SFIS', 
    description: 'Development of STEAM curriculum and intitiative', 
    summary: " ",
    date: 'Aug 2022 - Dec 2022',
    tags: ['Undergraduate', 'Team'] 
  },
  { 
    id: 15, 
    image: rc, 
    title: '3D Printed RC Car', 
    description: 'Fully custom 3D printed RC Car', 
    summary: " ",
    date: 'Jun 2021 - Aug 2022', 
    resources: [solidworks_cube],
    tags: ['Undergraduate', 'SolidWorks', 'Electronics', '3D Printing'] 
  },
  { 
    id: 16, 
    image: fpv, 
    title: 'FPV Drone', 
    description: 'Custom FPV drone with 3D printed fame', 
    summary: " ",
    date: 'May 2021 - Jun 2022', 
    resources: [solidworks_cube, betaflight],
    tags: ['Undergraduate', 'SolidWorks', 'Electronics', '3D Printing'] 
  },
  { 
    id: 17, 
    image: soft_eng, 
    title: 'Service Request App for BWH', 
    description: 'Software engineering project in team of 10 practicing agile SCRUM to creat a service request app for Brigham and Women\'s Hospital',
    summary: " ", 
    date: 'Mar 2022 - May 2022', 
    resources: [java, scene_builder],
    tags: ['Undergraduate', 'Algorithms', 'Design Patterns', 'Team'] 
  },
  { 
    id: 18, 
    image: rbe2001, 
    title: 'Unified Mobile Robotics Final Projects', 
    description: 'A collection of the final projects from WPIs Intro to Robotics and Unified Robotics I and II courses.', 
    summary: " ",
    date: 'Oct 2023 - Dec 2023', 
    resources: [cpp, arduino],
    tags: ['Undergraduate', 'Robotics', 'Algorithms', 'AI', 'Sensors', 'Kinematics', 'Team', 'Controls', 'Electronics'] 
  },
  { 
    id: 19, 
    image: rbe2102, 
    title: "Dijkstra's Robot", 
    description: "A robot navigating a grid world with unknown obstacles using Dijkstra's Algorithm.", 
    summary: " ",
    date: 'Oct 2021 - Mar 2022', 
    resources: [java],
    tags: ['Undergraduate', 'Robotics', 'Algorithms', 'AI', 'Motion Planning', 'Sensors', 'GUI'] 
  },
];

export default projects;
