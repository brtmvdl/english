import { LearningModel } from '../models/learning.model.js'

export const getLearningList = () => Array.from([
  new LearningModel('/img/grammar-lessons-1.png', 'grammar lessons', '', '/lessons/grammar/'),
  new LearningModel('/img/vocabulary-lessons-1.png', 'vocabulary lessons', '', '/lessons/vocabulary/'),
  new LearningModel('/img/listening-lessons-1.png', 'listening lessons', '', '/lessons/listening/'),
  new LearningModel('/img/writing-lessons-1.png', 'writing lessons', '', '/lessons/writing/'),
  new LearningModel('/img/grammar-tests-1.png', 'grammar tests', '', '/tests/grammar/'),
  new LearningModel('/img/vocabulary-tests-1.png', 'vocabulary tests', '', '/tests/vocabulary/'),
  new LearningModel('/img/listening-tests-1.png', 'listening tests', '', '/tests/listening/'),
  new LearningModel('/img/writing-tests-1.png', 'writing tests', '', '/tests/writing/'),
  new LearningModel('/img/use-of-english-tests-1.png', 'use of english tests', '/tests/use-of-english/'),
  new LearningModel('/img/level-tests-1.png', 'level tests', '/tests/level/'),
  new LearningModel('/img/exams-1.png', 'exams', '/exams/'),
])
