import React, { forwardRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Section, SectionTitle, TextLead, Button } from '../SectionWrappers';

const contactFormSchema = z.object({
  name: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres.' }),
  email: z.string().email({ message: 'Por favor, ingresa un email válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

export const ContactoSection = forwardRef<HTMLElement>((props, ref) => {
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const onSubmit = async (data: ContactFormInputs) => {
    setIsSending(true);
    setSubmitStatus(null);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Nuevo Mensaje de Contacto de ${data.name}`,
          ...data,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        reset();
      } else {
        throw new Error(result.message || 'Ocurrió un error al enviar el formulario.');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error en el envío del formulario:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Section ref={ref} id="contacto" className="bg-brand-blue-dark">
      <div className="text-center max-w-3xl mx-auto">
        <SectionTitle>Contáctanos</SectionTitle>
        <TextLead>
          ¿Listo para tu próxima aventura? ¿Tienes preguntas? Nuestro equipo está aquí para ayudarte a planificar tu experiencia perfecta en el mar.
        </TextLead>
      </div>
      <div className="mt-12 max-w-xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand-white mb-2">Nombre Completo</label>
            <input
              type="text"
              id="name"
              className="w-full bg-brand-blue-light border border-brand-gray text-brand-white rounded-md p-3 focus:ring-brand-gold focus:border-brand-gold"
              {...register('name')}
            />
            {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full bg-brand-blue-light border border-brand-gray text-brand-white rounded-md p-3 focus:ring-brand-gold focus:border-brand-gold"
              {...register('email')}
            />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-brand-white mb-2">Mensaje</label>
            <textarea
              id="message"
              rows={5}
              className="w-full bg-brand-blue-light border border-brand-gray text-brand-white rounded-md p-3 focus:ring-brand-gold focus:border-brand-gold"
              {...register('message')}
            />
            {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>}
          </div>

          <div className="text-center">
            <Button type="submit" variant="gold" disabled={isSending}>
              {isSending ? 'Enviando...' : 'Enviar Mensaje'}
            </Button>
          </div>
        </form>
        <div className="mt-6 text-center h-6">
          {submitStatus === 'success' && <p className="text-green-400">¡Gracias! Tu mensaje ha sido enviado con éxito.</p>}
          {submitStatus === 'error' && <p className="text-red-500">Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.</p>}
        </div>
      </div>
    </Section>
  );
});