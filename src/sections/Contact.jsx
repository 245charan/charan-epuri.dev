import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { media } from '../styles/Responsive';

const ContactContainer = styled.div`
	margin-bottom: 3rem;
`;

const ContactTitle = styled.h2`
	font-size: 2rem;
	margin-bottom: 1.5rem;
	color: var(--text-color);
	position: relative;

	&::after {
		content: '';
		position: absolute;
		bottom: -10px;
		left: 0;
		width: 50px;
		height: 3px;
		background-color: var(--primary-color);
	}

	${media.mobile`
    font-size: 1.75rem;
  `}
`;

const ContactContent = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2rem;

	${media.mobile`
    grid-template-columns: 1fr;
  `}
`;

const ContactInfo = styled.div`
	background-color: var(--card-background);
	border-radius: var(--border-radius);
	padding: 2rem;
	box-shadow: var(--card-shadow);

	${media.mobile`
    padding: 1.5rem;
  `}
`;

const ContactText = styled.p`
	font-size: 1rem;
	line-height: 1.7;
	color: var(--text-secondary);
	margin-bottom: 2rem;
`;
const ContactInfoTitle = styled.h3`
	font-size: 1.5rem;
	margin-bottom: 1.5rem;
	color: var(--text-color);

	${media.mobile`
    font-size: 1.3rem;
  `}
`;

const ContactInfoItem = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1.5rem;
`;

const ContactInfoIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: var(--primary-color);
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 1rem;
	color: white;
	font-size: 1.2rem;

	${media.mobile`
    width: 35px;
    height: 35px;
    font-size: 1rem;
  `}
`;

const ContactInfoText = styled.div`
	color: var(--text-color);

	h4 {
		font-size: 1rem;
		margin-bottom: 0.25rem;
	}

	p {
		color: var(--text-secondary);
		margin-bottom: 0;
	}

	${media.mobile`
    h4 {
      font-size: 0.9rem;
    }
    
    p {
      font-size: 0.85rem;
    }
  `}
`;

const MapContainer = styled.div`
	margin-top: 2rem;
	height: 300px;
	border-radius: 8px;
	overflow: hidden;

	iframe {
		width: 100%;
		height: 100%;
		border: none;
	}

	${media.mobile`
		height: 250px;
  `}
`;
const ContactForm = styled.div`
	background-color: var(--card-background);
	border-radius: var(--border-radius);
	padding: 2rem;
	box-shadow: var(--card-shadow);

	${media.mobile`
    padding: 1.5rem;
  `}
`;

const ContactFormTitle = styled.h3`
	font-size: 1.5rem;
	margin-bottom: 1.5rem;
	color: var(--text-color);

	${media.mobile`
    font-size: 1.3rem;
  `}
`;

const FormGroup = styled.div`
	margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
	display: block;
	margin-bottom: 0.5rem;
	color: var(--text-color);
	font-weight: 500;

	${media.mobile`
    font-size: 0.9rem;
  `}
`;

const FormInput = styled(Field)`
	width: 100%;
	padding: 0.75rem 1rem;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	background-color: var(--background-color);
	color: var(--text-color);
	font-family: inherit;

	&:focus {
		outline: none;
		border-color: var(--primary-color);
	}

	${media.mobile`
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
  `}
`;

const FormTextarea = styled(Field)`
	width: 100%;
	padding: 0.75rem 1rem;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	background-color: var(--background-color);
	color: var(--text-color);
	font-family: inherit;
	resize: vertical;
	min-height: 150px;

	&:focus {
		outline: none;
		border-color: var(--primary-color);
	}

	${media.mobile`
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
    min-height: 120px;
  `}
`;

const ErrorText = styled.div`
	color: #ff5656;
	font-size: 0.875rem;
	margin-top: 0.5rem;

	${media.mobile`
    font-size: 0.8rem;
  `}
`;

const SubmitButton = styled.button`
	display: inline-block;
	padding: 0.75rem 2rem;
	background-color: var(--primary-color);
	color: white;
	border: none;
	border-radius: 50px;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-3px);
		box-shadow: 0 4px 15px rgba(138, 86, 255, 0.4);
	}

	&:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	${media.mobile`
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
  `}
`;

const Contact = () => {
	const validationSchema = Yup.object({
		name: Yup.string().required('Name is required'),
		email: Yup.string()
			.email('Invalid email address')
			.required('Email is required'),
		subject: Yup.string().required('Subject is required'),
		message: Yup.string().required('Message is required'),
	});

	const handleSubmit = (values, { setSubmitting, resetForm }) => {
		// In a real application, you would use EmailJS or another service to send the email
		console.log(values);

		// Simulate API call
		setTimeout(() => {
			alert('Message sent successfully!');
			resetForm();
			setSubmitting(false);
		}, 1000);
	};

	return (
		<ContactContainer id='contact'>
			<ContactTitle>Contact Me</ContactTitle>
			<ContactContent>
				<ContactInfo>
					<ContactText>
						I'm always interested in hearing about new projects and
						opportunities. Whether you have a question about a
						project, want to discuss a potential collaboration, or
						just want to say hello, I'd love to hear from you.
					</ContactText>
					<ContactText>
						Fill out the form with some information about your
						project, and I'll get back to you as soon as possible.
						Looking forward to connecting with you!
					</ContactText>
					<ContactInfoTitle>Get In Touch</ContactInfoTitle>

					<ContactInfoItem>
						<ContactInfoIcon>
							<FaEnvelope />
						</ContactInfoIcon>
						<ContactInfoText>
							<h4>Email</h4>
							<p>Charan.Epuri1@marist.edu</p>
						</ContactInfoText>
					</ContactInfoItem>

					<ContactInfoItem>
						<ContactInfoIcon>
							<FaPhone />
						</ContactInfoIcon>
						<ContactInfoText>
							<h4>Phone</h4>
							<p>+1 (845) 309-3318</p>
						</ContactInfoText>
					</ContactInfoItem>

					<ContactInfoItem>
						<ContactInfoIcon>
							<FaMapMarkerAlt />
						</ContactInfoIcon>
						<ContactInfoText>
							<h4>Location</h4>
							<p>New York, USA</p>
						</ContactInfoText>
					</ContactInfoItem>
					<MapContainer>
						<iframe
							allowFullScreen=''
							loading='lazy'
							title='Location Map'
							src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Marist%20University,%20Poughkeepsie,%20New%20York,%20USA+(Marist%20College)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>
					</MapContainer>
				</ContactInfo>

				<ContactForm>
					<ContactFormTitle>Send Message</ContactFormTitle>

					<Formik
						initialValues={{
							name: '',
							email: '',
							subject: '',
							message: '',
						}}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}>
						{({ isSubmitting }) => (
							<Form>
								<FormGroup>
									<FormLabel htmlFor='name'>Name</FormLabel>
									<FormInput
										type='text'
										id='name'
										name='name'
									/>
									<ErrorMessage
										name='name'
										component={ErrorText}
									/>
								</FormGroup>

								<FormGroup>
									<FormLabel htmlFor='email'>Email</FormLabel>
									<FormInput
										type='email'
										id='email'
										name='email'
									/>
									<ErrorMessage
										name='email'
										component={ErrorText}
									/>
								</FormGroup>

								<FormGroup>
									<FormLabel htmlFor='subject'>
										Subject
									</FormLabel>
									<FormInput
										type='text'
										id='subject'
										name='subject'
									/>
									<ErrorMessage
										name='subject'
										component={ErrorText}
									/>
								</FormGroup>

								<FormGroup>
									<FormLabel htmlFor='message'>
										Message
									</FormLabel>
									<FormTextarea
										as='textarea'
										id='message'
										name='message'
									/>
									<ErrorMessage
										name='message'
										component={ErrorText}
									/>
								</FormGroup>

								<SubmitButton
									type='submit'
									disabled={isSubmitting}>
									{isSubmitting
										? 'Sending...'
										: 'Send Message'}
								</SubmitButton>
							</Form>
						)}
					</Formik>
				</ContactForm>
			</ContactContent>
		</ContactContainer>
	);
};

export default Contact;
