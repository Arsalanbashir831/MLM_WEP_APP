const express = require('express');
const router = express.Router();
const Company = require('../models/company');

// Create a tutorial for a company
router.post('/companies/:companyId/tutorials', async (req, res) => {
  try {
    const { companyId } = req.params;
    const company = await Company.findById(companyId);
    
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    
    const { thumbnail, link } = req.body;
    const newTutorial = {
      thumbnail,
      link
    };

    company.tutorial.push(newTutorial);
    const savedCompany = await company.save();

    res.json(savedCompany);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Read all tutorials for a company
router.get('/companies/:companyId/tutorials', async (req, res) => {
  try {
    const { companyId } = req.params;
    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }

    const tutorials = company.tutorial;
    res.json(tutorials);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a tutorial for a company
router.put('/companies/:companyId/tutorials/:tutorialId', async (req, res) => {
  try {
    const { companyId, tutorialId } = req.params;
    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }

    const { thumbnail, link } = req.body;
    const updatedTutorial = {
      thumbnail,
      link
    };

    const tutorialIndex = company.tutorial.findIndex(tutorial => tutorial._id.toString() === tutorialId);
    if (tutorialIndex === -1) {
      return res.status(404).json({ error: 'Tutorial not found' });
    }

    company.tutorial[tutorialIndex] = updatedTutorial;
    const savedCompany = await company.save();

    res.json(savedCompany);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a tutorial for a company
router.delete('/companies/:companyId/tutorials/:tutorialId', async (req, res) => {
  try {
    const { companyId, tutorialId } = req.params;
    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }

    const tutorialIndex = company.tutorial.findIndex(tutorial => tutorial._id.toString() === tutorialId);
    if (tutorialIndex === -1) {
      return res.status(404).json({ error: 'Tutorial not found' });
    }

    company.tutorial.splice(tutorialIndex, 1);
    const savedCompany = await company.save();

    res.json(savedCompany);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
