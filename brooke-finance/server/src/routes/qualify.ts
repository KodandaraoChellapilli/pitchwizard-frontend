import { Router } from 'express';
import { z } from 'zod';
import Qualification from '../models/Qualification.js';

const router = Router();

const qualifySchema = z.object({
  leadEmail: z.string().email(),
  answers: z.record(z.union([z.string(), z.number(), z.boolean()])),
});

router.post('/', async (req, res) => {
  const parsed = qualifySchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }

  const score = Object.values(parsed.data.answers).reduce((acc, val) => {
    if (typeof val === 'boolean') return acc + (val ? 1 : 0);
    if (typeof val === 'number') return acc + Math.min(val, 5);
    return acc + (val ? 1 : 0);
  }, 0);

  const qual = await Qualification.create({ ...parsed.data, score });
  return res.status(201).json({ id: qual.id, score });
});

export default router;
