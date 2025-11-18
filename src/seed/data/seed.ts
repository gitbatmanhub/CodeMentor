import * as bcrypt from 'bcrypt';

type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';

interface SeedData {
  users: SeedUser[];

  questions: QuestionItem[];

  // products: SeedProduct[];
}

export interface QuestionItem {
  question_text: string;
  options: OptionItem[];
}

export interface OptionItem {
  option_label: string;
  option_text: string;
  score: number;
  profile_hint: string;
}
interface SeedUser {
  email: string;
  fullName: string;
  password: string;
  role: string[];
}

export const initialData: SeedData = {
  users: [
    {
      email: 'admin@google.com',
      fullName: 'Edwin Admin',
      password: bcrypt.hashSync('Holaquehace1.0', 10),
      role: ['admin'],
    },
    {
      email: 'admin2@google.com',
      fullName: 'Edwin User',
      password: bcrypt.hashSync('Holaquehace2.0', 10),
      role: ['user'],
    },
  ],
  questions: [
    {
      question_text:
        '¿Cómo procedes normalmente para entender información nueva?',
      options: [
        {
          option_label: 'A',
          option_text: 'Necesito explicaciones claras y detalladas.',
          score: 1,
          profile_hint: 'analitico',
        },
        {
          option_label: 'B',
          option_text: 'Prefiero ver ejemplos antes de intentarlo.',
          score: 2,
          profile_hint: 'balanceado',
        },
        {
          option_label: 'C',
          option_text: 'Me gusta probar directamente para entender.',
          score: 3,
          profile_hint: 'explorador',
        },
        {
          option_label: 'D',
          option_text: 'Exploro varias fuentes o formas por mi cuenta.',
          score: 4,
          profile_hint: 'autonomo',
        },
      ],
    },
    {
      question_text:
        '¿Qué haces cuando una actividad requiere mantener la atención por un periodo prolongado?',
      options: [
        {
          option_label: 'A',
          option_text: 'Divido la actividad en pasos pequeños.',
          score: 1,
          profile_hint: 'analitico',
        },
        {
          option_label: 'B',
          option_text: 'Tomo pausas breves controladas.',
          score: 2,
          profile_hint: 'balanceado',
        },
        {
          option_label: 'C',
          option_text: 'Cambio de estrategia para mantener el interés.',
          score: 3,
          profile_hint: 'explorador',
        },
        {
          option_label: 'D',
          option_text: 'Trabajo de corrido si tengo motivación suficiente.',
          score: 4,
          profile_hint: 'autonomo',
        },
      ],
    },
    {
      question_text:
        'Cuando enfrentas un problema y no conoces la solución, ¿cómo sueles actuar?',
      options: [
        {
          option_label: 'A',
          option_text: 'Analizo la información disponible.',
          score: 1,
          profile_hint: 'analitico',
        },
        {
          option_label: 'B',
          option_text: 'Busco referencias o ejemplos similares.',
          score: 2,
          profile_hint: 'balanceado',
        },
        {
          option_label: 'C',
          option_text: 'Pruebo distintas alternativas.',
          score: 3,
          profile_hint: 'explorador',
        },
        {
          option_label: 'D',
          option_text: 'Investigo libremente hasta entender el problema.',
          score: 4,
          profile_hint: 'autonomo',
        },
      ],
    },
    {
      question_text:
        '¿Qué haces para recordar información que necesitas más adelante?',
      options: [
        {
          option_label: 'A',
          option_text: 'Tomo notas ordenadas o resúmenes.',
          score: 1,
          profile_hint: 'analitico',
        },
        {
          option_label: 'B',
          option_text: 'Relaciono la información con ejemplos.',
          score: 2,
          profile_hint: 'balanceado',
        },
        {
          option_label: 'C',
          option_text: 'La practico de alguna forma.',
          score: 3,
          profile_hint: 'explorador',
        },
        {
          option_label: 'D',
          option_text: 'Uso recordatorios o estrategias personales.',
          score: 4,
          profile_hint: 'autonomo',
        },
      ],
    },
    {
      question_text:
        'Cuando tienes varias tareas, ¿cómo decides por cuál comenzar?',
      options: [
        {
          option_label: 'A',
          option_text: 'Elijo la más importante según prioridad.',
          score: 1,
          profile_hint: 'analitico',
        },
        {
          option_label: 'B',
          option_text: 'Elijo la que puedo terminar más rápido.',
          score: 2,
          profile_hint: 'balanceado',
        },
        {
          option_label: 'C',
          option_text: 'Elijo la que me parece más interesante.',
          score: 3,
          profile_hint: 'explorador',
        },
        {
          option_label: 'D',
          option_text: 'Empiezo con la que me resulte más cómoda.',
          score: 4,
          profile_hint: 'autonomo',
        },
      ],
    },
    {
      question_text:
        '¿Qué tipo de actividades te resultan más interesantes o agradables?',
      options: [
        {
          option_label: 'A',
          option_text: 'Actividades estructuradas y ordenadas.',
          score: 1,
          profile_hint: 'analitico',
        },
        {
          option_label: 'B',
          option_text: 'Actividades con teoría y ejemplos.',
          score: 2,
          profile_hint: 'balanceado',
        },
        {
          option_label: 'C',
          option_text: 'Actividades prácticas o experimentales.',
          score: 3,
          profile_hint: 'explorador',
        },
        {
          option_label: 'D',
          option_text: 'Actividades libres o creativas.',
          score: 4,
          profile_hint: 'autonomo',
        },
      ],
    },
    {
      question_text:
        '¿Qué actividades te resultan menos motivadoras o más difíciles de iniciar?',
      options: [
        {
          option_label: 'A',
          option_text: 'Actividades muy abiertas sin instrucciones.',
          score: 1,
          profile_hint: 'analitico',
        },
        {
          option_label: 'B',
          option_text: 'Actividades repetitivas.',
          score: 2,
          profile_hint: 'balanceado',
        },
        {
          option_label: 'C',
          option_text: 'Actividades muy teóricas.',
          score: 3,
          profile_hint: 'explorador',
        },
        {
          option_label: 'D',
          option_text: 'Actividades con reglas estrictas.',
          score: 4,
          profile_hint: 'autonomo',
        },
      ],
    },
    {
      question_text:
        '¿Cómo reaccionas cuando una actividad se vuelve desafiante?',
      options: [
        {
          option_label: 'A',
          option_text: 'Reviso paso a paso lo que hice.',
          score: 1,
          profile_hint: 'analitico',
        },
        {
          option_label: 'B',
          option_text: 'Busco apoyo o ejemplos adicionales.',
          score: 2,
          profile_hint: 'balanceado',
        },
        {
          option_label: 'C',
          option_text: 'Cambio el enfoque o pruebo otro método.',
          score: 3,
          profile_hint: 'explorador',
        },
        {
          option_label: 'D',
          option_text: 'Tomo un momento antes de continuar.',
          score: 4,
          profile_hint: 'autonomo',
        },
      ],
    },
    {
      question_text: '¿Qué condiciones prefieres para concentrarte?',
      options: [
        {
          option_label: 'A',
          option_text: 'Silencio y estructura.',
          score: 1,
          profile_hint: 'analitico',
        },
        {
          option_label: 'B',
          option_text: 'Orden con algo de flexibilidad.',
          score: 2,
          profile_hint: 'balanceado',
        },
        {
          option_label: 'C',
          option_text: 'Un espacio donde pueda moverme.',
          score: 3,
          profile_hint: 'explorador',
        },
        {
          option_label: 'D',
          option_text: 'Cualquier entorno donde me sienta cómodo.',
          score: 4,
          profile_hint: 'autonomo',
        },
      ],
    },
    {
      question_text:
        '¿Qué formato te resulta más cómodo para realizar una actividad?',
      options: [
        {
          option_label: 'A',
          option_text: 'Texto o instrucciones claras.',
          score: 1,
          profile_hint: 'analitico',
        },
        {
          option_label: 'B',
          option_text: 'Imágenes o ejemplos visuales.',
          score: 2,
          profile_hint: 'balanceado',
        },
        {
          option_label: 'C',
          option_text: 'Actividades prácticas.',
          score: 3,
          profile_hint: 'explorador',
        },
        {
          option_label: 'D',
          option_text: 'Combinación libre de formatos.',
          score: 4,
          profile_hint: 'autonomo',
        },
      ],
    },
  ],
};
