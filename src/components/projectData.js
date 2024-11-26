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
import motion_plannign_proj from '../images/550_proj3_1.png';
import cube_swarm from '../images/cubeswarm.jpg';
import gesture_recog from '../images/gesture_ds.png';
import ind_robot_arm from '../images/abb_irb1600.png';
import rbe3002 from '../images/rbe3002.png';
import rbe3001 from '../images/rbe3001.png';
import rbe2001 from '../images/rbe2001.png';
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

const projects = [
  { 
    id: 1, 
    image: bee, 
    title: 'Audio Depth', 
    description: 'Description of project two.', 
    date: 'May 2024 - Present', 
    resources: [python, tensorflow, cpp, ros2, altium, solidworks_cube], // ros, arduino, tensorflow
    tags: ['drones', 'electronics'] 
  },
  { 
    id: 2, 
    image: drone_lineage, 
    title: 'Micro Bee Demo', 
    description: 'Description of project two.', 
    date: 'Jul & Nov 2024', 
    resources: [ardupilot], 
    tags: ['drones', 'electronics'] 
  },
  { 
    id: 3, 
    image: motion_plannign_proj, 
    title: 'Various Motion Planning Projects', 
    description: 'Mini projects using Open Motion Planning Libarary.', 
    date: 'Aug 2024 - Present', 
    resources: [cpp, docker_words], 
    tags: ['robotics', 'engineering'] 
  },
  { 
    id: 4, 
    image: controls_proj, 
    title: 'Drone Control', 
    description: 'Implementation of PID and MPC controllers for a drone', 
    date: 'Oct 2024 - Present', 
    resources: [matlab], //matlab
    tags: ['robotics', 'engineering'] 
  },
  { 
    id: 5, 
    image: huron_alone, 
    title: 'HURON', 
    description: 'Redesign of Humanoid Robot', 
    date: 'May 2024 - July 2024', 
    resources: [solidworks_cube], // SW
    tags: ['drones', 'electronics'] 
  },
  { 
    id: 6, 
    image: voltaic, 
    title: '3lb Combat Robot: Voltaic', 
    description: 'Description of project one.', 
    date: 'Jan 2023 - Present', 
    resources: [solidworks_cube], 
    tags: ['robotics', 'engineering'] 
  },
    { 
    id: 7, 
    image: bee, 
    title: 'Dynamics Arm Simulator', 
    description: 'MATLAB App simulating robot arm dynamics with RNE', 
    date: 'April 2024 - May 2024', 
    resources: [matlab],
    tags: ['drones', 'electronics'] 
  },
  { 
    id: 8, 
    image: gesture_recog, 
    title: 'Gesture Recognition', 
    description: 'A comparison of CNN based networks vs Vision Transformers', 
    date: 'Mar 2024 - May 2024', 
    resources: [python, pytorch, opencv],
    tags: ['drones', 'electronics'] 
  },
  { 
    id: 9, 
    image: rbe3002, 
    title: 'SLAM in Static Environment', 
    description: 'ROS implementation of SLAM with Turtlebot', 
    date: 'Oct 2023 - Dec 2023', 
    resources: [python, ros, gazebo],
    tags: ['robotics', 'engineering', 'AI'] 
  },
  { 
    id: 10, 
    image: cube_swarm, 
    title: 'Cube Swarm', 
    description: 'Manufacturing and deployment of cube robots', 
    date: 'Aug 2023 - May 2023', 
    resources: [solidworks_cube, python], // ??
    tags: ['robotics', 'engineering', 'AI'] 
  },
  { 
    id: 11, 
    image: shapes, 
    title: 'Fitting Shape Primitives', 
    description: 'Fitting shape primitives to simulated point cloud data.', 
    date: 'Oct 2023 - Dec 2023', 
    resources: [python, ros2, gazebo, pcl],
    tags: ['undergraduate', 'robotics', 'engineering', 'AI'] 
  },
  { 
    id: 12, 
    image: ind_robot_arm, 
    title: 'Industrial Robot Pick and Place', 
    description: 'Pick and Place operation using ABB IRB1600 and Cognex Camera', 
    date: 'Mar 2023 - May 2023', 
    resources: [python], // robot studio
    tags: ['robotics', 'engineering', 'AI'] 
  },
  { 
    id: 13, 
    image: rbe3001, 
    title: 'RBE3001 Pick and Place', 
    description: 'Pick and Place operation using ABB IRB1600 and Cognex Camera', 
    date: 'Jan 2023 - Man 2023', 
    resources: [matlab], // matlab
    tags: ['robotics', 'engineering', 'AI'] 
  },
  { 
    id: 14, 
    image: sfis, 
    title: 'IQP: Makerspace for SFIS', 
    description: 'Development of STEAM curriculum and intitiative', 
    date: 'Aug 2022 - Dec 2022',
    tags: ['robotics', 'engineering', 'AI'] 
  },
  { 
    id: 15, 
    image: rc, 
    title: '3D Printed RC Car', 
    description: 'Fully custom 3D printed RC Car', 
    date: 'Jun 2021 - Aug 2022', 
    resources: [solidworks_cube],
    tags: ['robotics', 'engineering', 'AI'] 
  },
  { 
    id: 16, 
    image: fpv, 
    title: 'FPV Drone', 
    description: 'Custom FPV drone with 3D printed fame', 
    date: 'May 2021 - Jun 2022', 
    resources: [solidworks_cube, betaflight],
    tags: ['robotics', 'engineering', 'AI'] 
  },
  { 
    id: 17, 
    image: soft_eng, 
    title: 'Service Request App for BWH', 
    description: 'Software engineering project in team of 10 practicing agile SCRUM to creat a service request app for Brigham and Women\'s Hospital', 
    date: 'Mar 2022 - May 2022', 
    resources: [java],
    tags: ['robotics', 'engineering', 'AI'] 
  },
  { 
    id: 18, 
    image: rbe2001, 
    title: 'Unified Mobile Robotics Final Projects', 
    description: 'A collection of the final projects from WPIs Intro to Robotics and Unified Robotics I and II courses.', 
    date: 'Oct 2023 - Dec 2023', 
    resources: [cpp, arduino], // matlab
    tags: ['robotics', 'engineering', 'AI'] 
  },
  { 
    id: 19, 
    image: rbe2102, 
    title: "Dijkstra's Robot", 
    description: "A robot navigating a grid world with unknown obstacles using Dijkstra's Algorithm.", 
    date: 'Oct 2021 - Mar 2022', 
    resources: [java], // matlab
    tags: ['robotics', 'algorithms', 'AI', 'motion planning', 'sensors', 'GUI'] 
  },
];

export default projects;
