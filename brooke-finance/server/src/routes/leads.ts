import { Router } from 'express';
import { z } from 'zod';
import Lead from '../models/Lead.js';

const router = Router();

const leadSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  companyName: z.string().optional(),
  serviceInterest: z.enum(['fractional_cfo', 'controller', 'bookkeeping', 'accounting_clerk']),
  companySize: z.string().optional(),
  numEmployees: z.number().int().nonnegative().optional(),
});

router.post('/', async (req, res) => {
  const parsed = leadSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }
  const lead = await Lead.create(parsed.data);
  return res.status(201).json({ id: lead.id });
});

export default router;
