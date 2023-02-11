const { postgres } = require("../services");

postgres.query(`CREATE TABLE IF NOT EXISTS public.subscriptions
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    email character varying(50) COLLATE pg_catalog."default" NOT NULL,
    subscriptions_time date NOT NULL DEFAULT 'CURRENT_TIMESTAMP',
    is_email_verified boolean NOT NULL DEFAULT 'false',
    frequency character varying(50) COLLATE pg_catalog."default",
    country character varying(50) COLLATE pg_catalog."default",
    subscriber_name character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT subscriptions_pkey PRIMARY KEY (id)
)`).catch((err) => {
    console.log(err);
});