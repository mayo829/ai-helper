import { Router } from 'express';
import { activeWindow } from 'get-windows';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const window = await activeWindow();
    res.json(window);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get active window' });
  }
});

export default router;
