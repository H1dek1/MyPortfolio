import {
  SiPython,
  SiCplusplus,
  SiTensorflow,
  SiKeras,
} from 'react-icons/si'
import { FaTools } from 'react-icons/fa'
export const rlMethods = [
  'Q Learning',
  'DQN',
  'Double DQN',
  'Dueling DQN',
  'A2C',
  'TRPO',
  'PPO',
  'DDPG',
]

export const implementations = [
  {
    icon: SiPython,
    name: 'Python',
  },
  {
    icon: SiCplusplus,
    name: 'C++',
  },
  {
    icon: SiTensorflow,
    name: 'Tensor flow',
  },
  {
    icon: SiKeras,
    name: 'Keras',
  },
  {
    icon: FaTools,
    name: 'Stable Baselines',
  }
]