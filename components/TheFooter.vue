<template>
<footer class="footer">
    <div class="info">
        <div class="about">
            <NuxtLink class="logoLink" to="/">
                <IconsLogo />
            </NuxtLink>
            <p class="description">Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности</p>
        </div>
        <div class="links">
            <p class="links__emailLabel">email</p>
            <a class="links__emailLink" href="mailto:testblogsupport@gmail.com" id="email">testblogsupport@gmail.com</a>
            <div class="socialMedia">
                <a class="socialMedia__link" href="#" target="_blank">
                    <IconsFacebook />
                </a>
                <a class="socialMedia__link" href="#" target="_blank">
                    <IconsVk />
                </a>
                <a class="socialMedia__link" href="#" target="_blank">
                    <IconsInstagram />
                </a>
                <a class="socialMedia__link" href="#" target="_blank">
                    <IconsTelegram />
                </a>
            </div>
        </div>
    </div>
    <BaseForm />
</footer>
</template>

<style scoped lang="scss">
.footer {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #8d959c;
}

.info {
    width: 100%;
    max-width: 1370px;
    margin: 0 auto 70px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 740px) {
        & {
            flex-direction: column;
            align-items: center;
            row-gap: 20px;
        }
    }
}

.about {
    @media (max-width: 740px) {
        & {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
}

.logoLink {
    display: block;
    margin-bottom: 20px;
}

.description {
    max-width: 426px;
    color: #8d959c;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;

    @media (max-width: 740px) {
        & {
            text-align: center;
        }
    }
}

.links__emailLabel {
    color: #8d959c;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

.links__emailLink {
    display: block;
    margin-bottom: 24px;
    color: #1b1b1b;
    font-family: Ubuntu;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;

    &:hover {
        text-decoration: underline;
    }
}

.socialMedia {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.socialMedia__link {
    transform: scale(100%);
    transition: all 0.4s linear;

    &:hover {
        transform: scale(150%);
    }
}
</style>
