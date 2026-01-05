// Email service for demo request submissions
// In production, this would call your backend API which uses Resend

export interface DemoRequestData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  organizationType: string;
  primaryUseCase: string;
  transactionVolume: string;
  regulatoryFrameworks: string[];
  complianceChallenges: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

export const sendDemoRequestEmail = async (formData: DemoRequestData): Promise<{ success: boolean; error?: string }> => {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Log the form data (in production, this would be sent to your backend)
    console.log('Demo request submitted:', {
      contact: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        company: formData.company,
        role: formData.role,
      },
      business: {
        organizationType: formData.organizationType,
        primaryUseCase: formData.primaryUseCase,
        transactionVolume: formData.transactionVolume,
        regulatoryFrameworks: formData.regulatoryFrameworks,
      },
      challenges: formData.complianceChallenges,
      timestamp: new Date().toISOString(),
    });

    // For now, we'll simulate a successful email send
    // In production, you would:
    // 1. Send this data to your backend API
    // 2. Your backend would use Resend to send the email
    // 3. Return the result from your backend
    
    // Simulate occasional failures for testing (remove in production)
    if (Math.random() < 0.1) {
      throw new Error('Simulated network error');
    }

    return { success: true };

  } catch (error) {
    console.error('Email service error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Network error occurred. Please try again.' 
    };
  }
};

export const sendContactFormEmail = async (formData: ContactFormData): Promise<{ success: boolean; error?: string }> => {
  try {
    const apiBaseUrl = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
    const response = await fetch(`${apiBaseUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const responseText = await response.text();
    let result: any = null;

    if (responseText) {
      try {
        result = JSON.parse(responseText);
      } catch {
        result = null;
      }
    }

    if (!response.ok) {
      const message =
        result && typeof result === 'object' && typeof result.error === 'string' && result.error.trim()
          ? result.error
          : `Server error (${response.status}). Please try again later.`;
      throw new Error(message);
    }

    if (!result && responseText.trim()) {
      throw new Error('Unexpected server response. Please try again later.');
    }

    if (result && typeof result === 'object' && result.success === false) {
      const message =
        typeof result.error === 'string' && result.error.trim()
          ? result.error
          : 'Failed to send contact form';
      throw new Error(message);
    }

    return { success: true };

  } catch (error) {
    console.error('Email service error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Network error occurred. Please try again.' 
    };
  }
};
